import React from 'react'

 function LikedCartoonContainer({ filterFavorites }) {

    function FavoritedShow() {
        return filterFavorites.map((show) => (
            <h4 key = {`${show.id}0`}>
                * {show.title}
            </h4>
      ));
    }
      
    return (
        <div className = "container">
            <h2>Favorites</h2>
            {FavoritedShow()}
        </div>
    )
}

export default LikedCartoonContainer;