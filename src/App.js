import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import {useState} from 'react'
import CartProvider from "./store/CartProvider";
function App() {
  const [cartShow, setcartShow] = useState(false)
  const ShowCartHnadler = () => {
    setcartShow(true)
  }
  const hideCartHandler = () => {
    setcartShow(false)
  }
  return (
    <CartProvider>
    {cartShow && <Cart onCloseCart={hideCartHandler}/>}
    <Header onShowCart={ShowCartHnadler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}
export default App;