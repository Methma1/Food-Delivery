import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
const Exploremenu = (category,setCategory) => {
  
  
  
    return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>"Explore the Flavors of Tomato! Dive into our menu to discover a world of delicious dishes made with the freshest ingredients. From classic favorites to innovative creations, there's something for everyone to enjoy. Join us on a culinary adventure and experience the true taste of Tomato!"</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
