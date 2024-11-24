import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Exploremanu from '../../components/Explore/Exploremanu'
import Fooddisplay from '../../components/foodDIsplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const Home = () => {
    const [categeory,setcategeory] = useState('All');

    return (
        <div>
            <Header/>
            <Exploremanu categeory={categeory} setcategeory={setcategeory}/>
            <Fooddisplay categeory={categeory}/>
            <Appdownload/>
        </div>
    )
}

export default Home
