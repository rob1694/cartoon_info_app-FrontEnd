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
          .then((cartoons) => {
            setCartoons(cartoons);
          });
        }, []);

        function addCartoon(cartoon) {
          setCartoons([...cartoons, cartoon]);
        }

        function removeCartoon(cartoon) {
          setCartoons(cartoon)
        }

    return (
        <div>
            <h1>Cartoon Information</h1>
            <CartoonForm onAddCartoon ={addCartoon}/>
            <LikedCartoonContainer cartoons = {cartoons}/>
            <CartoonContainer onDeleteCartoon = {removeCartoon} cartoons = {cartoons} url = {url}/>
        </div>

    )
}

export default MainPage;