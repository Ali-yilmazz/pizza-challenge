import React from 'react'
import MainNavbarTr from '../components/MainNavbar/MainNavbarTr';
import FoodDeals from '../components/FoodDeals/FoodDeals';
import MainNavbarEn from '../components/MainNavbar/MainNavbarEn';
import Cards from '../components/Cards/Cards';
import "../layout/MainContext.css"

export default function MainContext() {

    return (
        <div className='flex flex-col items-center'>
            <MainNavbarTr />
            <FoodDeals />
            <MainNavbarEn />
            <Cards />
        </div>
    );
};