import React, { useContext, useState } from 'react'
import './navbar.css';
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext';

const Navbar = ({setshowLogin}) => {
    const [manu,setManu] = useState('home');
    const {getTotalCartAmount} = useContext(Storecontext);

    return (
        <div className='Navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbarManu">
                <Link to='/' onClick={()=>setManu('home')} className={manu === 'home'?'active':''}>home</Link>
                <a href='#explore-manu' onClick={()=>setManu('manu')}className={manu === 'manu'?'active':''}>manu</a>
                <a href='#app-download' onClick={()=>setManu('mobile-app')}className={manu === 'mobile-app'?'active':''}>mobile-app</a>
                <a href='#footer' onClick={()=>setManu('contact us')}className={manu === 'contact us'?'active':''}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                   <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                    <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                <button onClick={()=>setshowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
