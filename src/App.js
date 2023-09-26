import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart((showCart) => !showCart);
  }

  return (
    // wrapping the all components with the CartProvider component will give access to the cart-context data to all components
    <CartProvider>
      {showCart && <Cart onShowCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
