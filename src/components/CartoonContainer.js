import React from 'react'
import CartoonShow from './CartoonShow';

 function CartoonContainer(
         { onChangeCartoon, 
          url, 
          cartoons
          }) 
  {

    const [count, setCount] = React.useState(0)

  function deleteCartoon(cartoonId) {
    const newURL = `${url}/${cartoonId}`;
    const config = { method: "DELETE" };
    fetch(newURL, config)
      .then(r => r.json())
      .then(() => {
        const deleteCartoons = cartoons.filter(show => show.id !== cartoonId);
        onChangeCartoon(deleteCartoons)
      })
  }
    
  function patchCartoon(cartoonId, updatedCartoon) {
    fetch(`${url}/${cartoonId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCartoon),
    })
      .then((r) => r.json())
      .then((updatedCartoon) => {
        const updatedCartoons = cartoons.map((show) => {
        if (show.id === updatedCartoon.id) return updatedCartoon;
          return show;
        });
        onChangeCartoon(updatedCartoons);
      })
  }

    const cartoonShows = cartoons.map((show) => (
        <CartoonShow
          key = {show.id}
          show = {show}
          deleteCartoon = {deleteCartoon}
          counter = {patchCartoon}
        />
      ));
    
    return (
        <div>
            {cartoonShows}
        </div>
        
    )
}

export default CartoonContainer;