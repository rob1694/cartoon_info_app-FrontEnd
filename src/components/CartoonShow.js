import React from 'react'

function CartoonShow( { deleteCartoon, show, counter }) {
    
    const { title, description, ageRange, img, id, likes } = show;

    function handleDeleteCartoon() {
        deleteCartoon(id)
      }

    function handleCount() {
        const updateShow = {
            likes: likes + 1
        }
        counter(id, updateShow)
    }

    return (
        <div>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <h4>Age Range: {ageRange} </h4>
            <div>
                <img alt = {title} src = {img} /> 
            </div>
            <p> <button onClick = {handleCount}> Like </button> : {likes} </p>
            <button > FAVORITE </button>
            <button onClick = {handleDeleteCartoon} > DELETE</button>
        </div>
    )
}

export default CartoonShow;