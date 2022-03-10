import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const SelectProjectMenu = (props) => {
  const { name, subMenus, onClick, to } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={onClick}>
      <Link
        exact
        to={to}
        className={`menu-item`}
      >
  
        <p className="name" onClick={() => setExpand(!expand)}>{name}
         <div className="menu-icon">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M7.8079 10.2695L5.76008 7.81215C5.32586 7.29109 5.69639 6.5 6.37466 6.5L9.62526 6.5C10.3035 6.5 10.6741 7.29109 10.2398 7.81215L8.19201 10.2695C8.09207 10.3895 7.90785 10.3895 7.8079 10.2695Z" fill="white"/>
          </svg>
        </div>
         </p> 
     
      </Link>
      {subMenus && subMenus.length > 0 && expand ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default SelectProjectMenu;
