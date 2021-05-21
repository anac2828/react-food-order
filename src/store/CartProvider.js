import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//this can be here because it does not need any data inside the CartProvider component
//state is the last state snapshot
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    //the action.item data comes from the addItemToCartHandler
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //return the updated state
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
//The provider will manange the cart-context data and will give access to the data to other components
//You will need to wrap the component that needs access to the cart-context data with the CartProvider component
const CartProvider = props => {
  //first element returned by useReducer is the state snapshot, second is a function that allows you do dispatch an acction to the reducer
  const [cartState, dispatchCartAccion] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAccion({ type: 'ADD_ITEM', item: item });
  };
  const removeItemFromCartHanlder = id => {};

  //this object will manange the data in the cart-context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
