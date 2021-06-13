import React from 'react'
import './MainPage.css'
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

        function handleFavorite(cartoonId) {
          setCartoons((pre) => {
            const selected = pre.find((show) => show.id === cartoonId);
            selected.favorited = true;
            const favoritedShow = [...pre]
            return favoritedShow;
          })
        }

        function addCartoon(cartoon) {
          setCartoons([...cartoons, cartoon]);
        }

        function changeCartoon(cartoon) {
          setCartoons(cartoon)
        }

        
    return (
        <div className = "row">
            <h1 className = "text-center">Cartoon Information</h1>
            <div className = "col-sm-2">
              <LikedCartoonContainer 
              filterFavorites = {filterFavorites(cartoons)}
              />
            </div>
            <div className = "col-md-7">
              <CartoonContainer 
              onChangeCartoon = {changeCartoon} 
              cartoons = {cartoons} 
              url = {url} 
              handleFavorite = {handleFavorite}
              />
            </div>
            <div className = "col-sm-3">
              <CartoonForm onAddCartoon ={addCartoon}/>
            </div>
          </div>

    )
}

export default MainPage;