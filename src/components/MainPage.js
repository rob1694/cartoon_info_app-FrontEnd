import React from 'react'
import CartoonContainer from './CartoonContainer';
import CartoonForm from './CartoonForm';
import LikedCartoonContainer from './LikedCartoonContainer';

function MainPage() {
    return (
        <div>
            <h1>MAIN PAGE!!!</h1>
            <CartoonForm />
            <LikedCartoonContainer />
            <CartoonContainer />
        </div>

    )
}

export default MainPage;