import React from 'react'

 function LikedCartoonContainer({ cartoons }) {

    const favorited = cartoons.map((show) => (
        <h4>
        - {show.title}
        </h4>
      ));
    
    return (
        <div>
            <h2>Favorites</h2>
            {favorited}
        </div>
    )
}

export default LikedCartoonContainer;