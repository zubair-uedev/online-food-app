import React from 'react'
import './Exploremanu.css'
import {menu_list} from '../../assets/assets'
const Exploremanu = ({categeory,setcategeory}) => {
    return (
        <div className='explore-manu' id='explore-manu'>
            <h1>Explore our manu</h1>
            {/* <p className='explore-manu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, tempore sit? Molestiae neque atque illo saepe, architecto laboriosam ea non porro iure nihil delen</p> */}
            <div className="explore-manu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setcategeory(pre=>pre===item.menu_name?'All':item.menu_name)} key={index} className='explore-manu-list-item'>
                            <img className={categeory===item.menu_name?'active':''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Exploremanu
