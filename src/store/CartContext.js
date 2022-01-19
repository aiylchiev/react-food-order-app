import React from 'react'
const CartContext = React.createContext({ 
    items: [],
    totalAmount: 0 ,
    addItem: (item) => {},
    removeItem: (id) => {}
});
export default CartContext;
//биздин данныйлар баардык компоненттерге доступный болуу учун