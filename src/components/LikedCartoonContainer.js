import React from 'react'

 function LikedCartoonContainer({ cartoons }) {
    
    const { Title } = cartoons;

    return (
        <div>
            <h2>Favorites</h2>
            <h3>- {Title} </h3>
        </div>
    )
}

export default LikedCartoonContainer;