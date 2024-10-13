const { createContext, useReducer } = require("react");

let reducer=(state,action)=>{
    

}
var CartContext = createContext()
export function cartprovider({children}){
    let [state,dispatch]=useReducer(reducer,{cartlist:[]})
    return(
        <CartContext.Provider value={{state,dispatch}}>
                {children}
        </CartContext.Provider>
    )
}




export default CartContext