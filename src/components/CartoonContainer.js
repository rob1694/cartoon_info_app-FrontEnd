import React from 'react'
import CartoonShow from './CartoonShow';

 function CartoonContainer({ onDeleteCartoon, url, cartoons } ) {

  function deleteCartoon(CartoonId) {
    const newURL = `${url}/${CartoonId}`;
    const config = { method: "DELETE" };
    fetch(newURL, config)
      .then(r => r.json())
      .then(() => {
        const deleteCartoons = cartoons.filter(show => show.id !== CartoonId);
        onDeleteCartoon(deleteCartoons)
      })
  }
    
    const cartoonShows = cartoons.map((show) => (
        <CartoonShow
          key = {show.id}
          show = {show}
          deleteCartoon = {deleteCartoon}
        />
      ));
    
    return (
        <div>
            {cartoonShows}
        </div>
        
    )
}

export default CartoonContainer;