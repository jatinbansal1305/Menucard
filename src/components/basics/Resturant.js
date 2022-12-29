import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbor from "./Navbor";
import "./style.css";
const categorylist=[...new Set(Menu.map((element)=>{
    return element.category;
})),"All"]
const Resturant = () => {

    const [menuData,setMenuData]=useState(Menu);
    const [categoryList,setCategoryList]=useState(categorylist);
    const filteritem =(category)=>{
        if(category=="All")
        {
            setMenuData(Menu);
            return;
        }
    
        const updated=Menu.filter((element)=>{
            return element.category===category;
        });
        setMenuData(updated);
        
    }

  return (
    <>
      <Navbor filteritem={filteritem} categoryList={categoryList}/>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant;
