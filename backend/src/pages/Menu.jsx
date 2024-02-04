import React from "react";
import MenuItems from "../pages/MenuItems";
import "../styles/Menu.css";
import { motion } from 'framer-motion';
import { MenuList } from "../helpers/MenuList";

function Menu() {
  return (
    <motion.div className="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="menuTitle">Our Games</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItems
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Menu;
