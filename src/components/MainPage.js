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

        function handleCartoonChange(Cartoon) {
          setCartoons([...cartoons, Cartoon]);
        }

    return (
        <div>
            <h1>Cartoon Information</h1>
            <CartoonForm onAddCartoon ={handleCartoonChange}/>
            <LikedCartoonContainer cartoons = {cartoons}/>
            <CartoonContainer onDeleteCartoon = {handleCartoonChange} cartoons = {cartoons} url = {url}/>
        </div>

    )
}

export default MainPage;