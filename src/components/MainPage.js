import React from 'react'
import CartoonContainer from './CartoonContainer';
import CartoonForm from './CartoonForm';
import LikedCartoonContainer from './LikedCartoonContainer';

function MainPage() {
    

    const Dummyshow =
        {
        name: "Cocomelon", 
        Description: "Learn letters, numbers, animal sounds and more with J.J. in this musical series that brings fun times with nursery rhymes for the whole family!",
        Age_range: "All Ages", 
        IMG: "", 
        id: 1
       }
    
    return (
        <div>
            <h1>MAIN PAGE!!!</h1>
            <CartoonForm />
            <LikedCartoonContainer Dummyshow = {Dummyshow}/>
            <CartoonContainer Dummyshow = {Dummyshow}/>
        </div>

    )
}

export default MainPage;