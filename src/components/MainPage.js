import React from 'react'
import CartoonContainer from './CartoonContainer';
import CartoonForm from './CartoonForm';
import LikedCartoonContainer from './LikedCartoonContainer';
import { useState } from "react"

function MainPage() {

    const [cartoons, setCartoons] = useState([])

    const Dummyshows = [
        {
            name: "Cocomelon", 
            Description: "Learn letters, numbers, animal sounds and more with J.J. in this musical series that brings fun times with nursery rhymes for the whole family!",
            Age_range: "All Ages", 
            IMG: "", 
            id: 1
        },
        {
            name: "Mickey Mouse Clubhouse", 
            Description: "Mickey, Minnie, Pluto, Goofy, Daisy and Donald all hang around the Clubhouse. Mickey leads viewers through stories with play-along and singalong segments. Learning early math skills and identifying shapes, patterns and numbers are all part of Mickey's lessons. Mickey and his pals also play with handy gizmos and gear, including the Mousekedoer, Mouseketools and a transportable device called Toodles.",
            Age_range: "All Ages", 
            IMG: "", 
            id: 2
        }
    ]

    
    return (
        <div>
            <h1>MAIN PAGE!!!</h1>
            <CartoonForm />
            <LikedCartoonContainer Dummyshows = {Dummyshows}/>
            <CartoonContainer Dummyshows = {Dummyshows}/>
        </div>

    )
}

export default MainPage;