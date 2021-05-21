import React from 'react';

//This will only create the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
