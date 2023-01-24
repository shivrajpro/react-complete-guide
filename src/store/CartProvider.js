import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const onAddItemToCart = ()=>{}

    const onRemoveItemFromCart = ()=>{}
    
    const cartContext = {
        items:[],
        totalAmount:0,
        onAddItem:onAddItemToCart,
        onRemoveItem:onRemoveItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;