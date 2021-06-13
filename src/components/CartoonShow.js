import React from 'react'
import './CartoonShow.css'

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
        <div className = "text-center">
            <h3 className = "card-header">{title}</h3>
            <p>Description: {description}</p>
            <h5>Age Range: {ageRange} </h5>
            <div>
                <img className = "rounded mx-auto d-block" alt = {title} src = {img} /> 
            </div>
            <p> <button className = "btn btn-success" onClick = {handleCount}> Like </button> : {likes} </p>
            <button className = "btn btn-info" > FAVORITE </button>
            <br></br>
            <button className = "btn btn-danger" onClick = {handleDeleteCartoon} > DELETE</button>
        </div>
    )
}

export default CartoonShow;