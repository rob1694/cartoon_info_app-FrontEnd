import React from 'react'
import CartoonShow from './CartoonShow';

 function CartoonContainer({ Dummyshow } ) {
    
    
    return (
        <div>
            <h2>THIS IS A CONTAINER!!!</h2>
            <CartoonShow Dummyshow = {Dummyshow}/>
        </div>
        
    )
}

export default CartoonContainer;