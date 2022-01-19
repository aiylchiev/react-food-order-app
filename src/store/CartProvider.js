import CartContext from "./CartContext";
import { useContext} from "react";
import { useReducer } from "react";

const defaultState = {
    items: [],
    totalAmount: 0,
}
const cartReduser = (state ,action) => {
    if(action.type === "ADD") {
        // const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.amount;

        const exitsingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        )
        const existingCartItem = state.items[exitsingCartItemIndex];
        let updatedItems;
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[exitsingCartItemIndex] = updatedItem
        }else{
            // updatedItem = {...action.item};
            updatedItems = state.items.concat(action.item)
        }
        return{
            items:updatedItems,
            totalAmount: updateTotalAmount,
        }
    }
    if(action.type === "REMOVE") {
        const exitsingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        )
        const existingItem = state.items[exitsingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount ===1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[exitsingCartItemIndex] = updatedItem
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState
}
const CartProvider = props => {

    const cartCtx = useContext(CartContext);
    const [cartState, dispatchCart] = useReducer(cartReduser, defaultState)
    
    const addItemToCartHandler = item => {
        dispatchCart({ type: "ADD", item: item})
    }
    const removeItemFromCartHandler = id => {
        dispatchCart({ type: "REMOVE", id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
}
export default CartProvider;