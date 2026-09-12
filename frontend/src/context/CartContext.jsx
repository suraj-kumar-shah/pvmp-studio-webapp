import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CURRENCIES = {
  INR: { symbol: '₹', rate: 1.0, label: 'INR (₹) - India' },
  NPR: { symbol: 'रू ', rate: 1.60, label: 'NPR (रू) - Nepal' }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('pvmp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('pvmp_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  /**
   * Add package to cart
   */
  const addPackageToCart = (pkg, eventDate = '', notes = '') => {
    const itemKey = `pkg_${pkg.id}_${eventDate || 'general'}`;
    const existingIndex = cartItems.findIndex(item => item.cartKey === itemKey);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem = {
        cartKey: itemKey,
        type: 'package',
        id: pkg.id,
        name: pkg.name,
        category: pkg.categoryLabel || 'Photography Package',
        unitPrice: pkg.price,
        quantity: 1,
        image: pkg.image,
        details: {
          duration: pkg.duration,
          team: pkg.team,
          eventDate: eventDate || 'Date to be coordinated',
          notes
        }
      };
      setCartItems(prev => [newItem, ...prev]);
    }
    showToast(`Added "${pkg.name}" to your booking bag`);
    setIsCartOpen(true);
  };

  /**
   * Add customizable product to cart
   */
  const addProductToCart = (product, selectedOptions, quantity = 1, unitPrice, customText = '') => {
    // Generate unique key based on selected options
    const optionsHash = Object.entries(selectedOptions || {})
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}:${v}`)
      .join('_');

    const itemKey = `prod_${product.id}_${optionsHash}_${customText ? encodeURIComponent(customText) : 'none'}`;
    const existingIndex = cartItems.findIndex(item => item.cartKey === itemKey);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      const newItem = {
        cartKey: itemKey,
        type: 'product',
        id: product.id,
        name: product.name,
        category: product.categoryLabel || 'Keepsake Collection',
        unitPrice: unitPrice || product.basePrice,
        quantity,
        image: product.images?.[0] || product.image,
        selectedOptions: selectedOptions || {},
        customText,
        details: {
          leadTime: product.leadTime
        }
      };
      setCartItems(prev => [newItem, ...prev]);
    }
    showToast(`Added ${quantity}x "${product.name}" to your bag`);
    setIsCartOpen(true);
  };

  /**
   * Update item quantity
   */
  const updateQuantity = (cartKey, newQty) => {
    if (newQty <= 0) {
      removeItem(cartKey);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.cartKey === cartKey ? { ...item, quantity: newQty } : item))
    );
  };

  /**
   * Remove item from cart
   */
  const removeItem = (cartKey) => {
    setCartItems(prev => prev.filter(item => item.cartKey !== cartKey));
    showToast('Item removed from cart');
  };

  /**
   * Clear all items
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Format price with active currency
   */
  const formatPrice = (amount) => {
    const curr = CURRENCIES[currency] || CURRENCIES.INR;
    const converted = amount * curr.rate;
    
    return `${curr.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        currency,
        setCurrency,
        currencies: CURRENCIES,
        toastMessage,
        addPackageToCart,
        addProductToCart,
        updateQuantity,
        removeItem,
        clearCart,
        formatPrice,
        subtotal,
        totalItemsCount,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
