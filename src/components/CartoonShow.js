import React from 'react'

function CartoonShow( { deleteCartoon, show }) {
    
    const { Title, Description, Age_range, Img, id } = show;

    function handleDeleteCartoon() {
        deleteCartoon(id)
      }
    
    return (
        <div>
            <h3>- Title: {Title}</h3>
            <p>- Description: {Description}</p>
            <h4>- Age Range: {Age_range} </h4>
            <div>
                <img alt = {Title} src = {Img} /> 
            </div>
            <button>LIKE/DISLIKE</button>
            <button onClick = {handleDeleteCartoon} > DELETE</button>
        </div>
    )
}

export default CartoonShow;