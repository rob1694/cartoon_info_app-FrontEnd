import React from 'react'
import CartoonContainer from './CartoonContainer';
import CartoonForm from './CartoonForm';
import LikedCartoonContainer from './LikedCartoonContainer';
import { useState, useEffect} from "react"

function MainPage() {

    const [cartoons, setCartoons] = useState([]);

    const url = `http://localhost:3001/cartoons`
    useEffect(() => {
        fetch(url)
          .then((r) => r.json())
          .then((json) => {
            const favShows = addToFavorites(json)
            setCartoons(favShows);
          });
        }, []);

        function addToFavorites (cartoons) {
          return cartoons.map((show) => {
            return {...show, favorited: false }
          })
        }

        function filterFavorites(cartoons) {
          return cartoons.filter((show) => show.favorited)
        }

        function addCartoon(cartoon) {
          setCartoons([...cartoons, cartoon]);
        }

        function changeCartoon(cartoon) {
          setCartoons(cartoon)
        }

        
    return (
        <div>
            <h1>Cartoon Information</h1>
            <CartoonForm onAddCartoon ={addCartoon}/>
            <LikedCartoonContainer 
              filterFavorites = {filterFavorites(cartoons)}
            />
            <CartoonContainer 
              onChangeCartoon = {changeCartoon} 
              cartoons = {cartoons} 
              url = {url} 
            />
        </div>

    )
}

export default MainPage;