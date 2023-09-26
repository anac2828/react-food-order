import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//this can be here because it does not need any data inside the CartProvider component
//first argument the state, second is a function that allows you do dispatch an acction to the reducer
function cartReducer(state, action) {
  // *** ADD ITEM TO CART

  if (action.type === 'ADD_ITEM') {
    let updatedItems;

    //the action.item data comes from the addItemToCartHandler
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.count;

    //returns the index of the item.id that is equal to the item.id being added to the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        count: existingCartItem.count + action.item.count,
      };

      // creates a new array of items to update to existing item
      updatedItems = [...state.items];

      // updates the item in the updated items array
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // concat() gives us an new array and does not change the state.items array
      updatedItems = state.items.concat(action.item);
    }

    //return the updated state
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // ***  REMOVE ITEM FROM CART

  if (action.type === 'REMOVE_ITEM') {
    let updatedItems;

    // Find index of existing item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    if (existingItem.count === 1) {
      // will remove the item that have the same id
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, count: existingItem.count - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
}
//The provider will manange the cart-context data and will give access to the data to other components
//You will need to wrap the component that needs access to the cart-context data with the CartProvider component
function CartProvider({ children }) {
  // use useReducer for more complex state. First arg is the cartReducer funtion, second is the default state.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //this object will manange the data in the cart-context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHanlder,
  };

  function addItemToCartHandler(item) {
    // this is the action used in the reducer. The item info will come from the ListItem component.
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }
  function removeItemFromCartHanlder(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
