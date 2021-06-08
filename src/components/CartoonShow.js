import React from 'react'

function CartoonShow( { Dummyshow }) {
    
    const { name, Description, Age_range, IMG, id } = Dummyshow;
    
    return (
        <div>
            <h3>- Title: {name}</h3>
            <p>- Description: {Description}</p>
            <h4>- Age Range: {Age_range} </h4>
            <h3>- {IMG}</h3>
            <button>LIKE/DISLIKE</button>
            <button>DELETE</button>
        </div>
    )
}

export default CartoonShow;