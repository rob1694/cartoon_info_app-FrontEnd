import React from 'react'

function CartoonShow( { deleteCartoon, show }) {
    
    const { title, description, ageRange, img, id } = show;

    function handleDeleteCartoon() {
        deleteCartoon(id)
      }
    
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <h4>Age Range: {ageRange} </h4>
            <div>
                <img alt = {title} src = {img} /> 
            </div>
            <button>LIKE/DISLIKE</button>
            <button onClick = {handleDeleteCartoon} > DELETE</button>
        </div>
    )
}

export default CartoonShow;