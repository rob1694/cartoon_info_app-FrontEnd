import React from 'react'
import CartoonShow from './CartoonShow';

 function CartoonContainer({ Dummyshows } ) {
    
    const cartoonShows = Dummyshows.map((show) => (
        <CartoonShow
          key = {show.id}
          show = {show}
        />
      ));
    
    return (
        <div>
            <h2>THIS IS A CONTAINER!!!</h2>
            {cartoonShows}
        </div>
        
    )
}

export default CartoonContainer;