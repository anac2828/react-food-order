import React from 'react';

//This will only create the context. It is like creating a schema as in MongoDB. The Provider will manange the data
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
