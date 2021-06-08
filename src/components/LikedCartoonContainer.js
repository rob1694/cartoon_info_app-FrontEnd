import React from 'react'

 function LikedCartoonContainer({ Dummyshows }) {
    
    const { name } = Dummyshows;
    
    return (
        <div>
            <h2>Liked SHOWS</h2>
            <h3>- {name} </h3>
        </div>
    )
}

export default LikedCartoonContainer;