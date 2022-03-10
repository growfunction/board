import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, onClick, to, count, icon, inactive } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={onClick}>
      <Link
        exact
        to={to}
        className={`menu-item`}
      >
        <div className="menu-icon" onClick={() => console.log('in', inactive)}>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99996 1.65137C7.34252 1.65137 6.77057 2.07295 5.62666 2.91611L5.39075 3.08999C5.21054 3.22282 5.12044 3.28923 5.0237 3.34508C4.92696 3.40093 4.8244 3.44576 4.61926 3.53541L4.35072 3.65277C3.04857 4.22184 2.39749 4.50638 2.06877 5.07574C1.74005 5.6451 1.81917 6.35122 1.97742 7.76345L2.01005 8.0547C2.03498 8.27717 2.04744 8.38841 2.04744 8.50011C2.04744 8.61181 2.03498 8.72305 2.01005 8.94553L1.97742 9.23678C1.81917 10.649 1.74005 11.3551 2.06877 11.9245C2.39749 12.4938 3.04857 12.7784 4.35072 13.3475L4.61926 13.4648C4.8244 13.5545 4.92696 13.5993 5.0237 13.6551C5.12044 13.711 5.21054 13.7774 5.39075 13.9102L5.62666 14.0841C6.77057 14.9273 7.34252 15.3489 7.99996 15.3489C8.6574 15.3489 9.22935 14.9273 10.3733 14.0841L10.6092 13.9102C10.7894 13.7774 10.8795 13.711 10.9762 13.6551C11.073 13.5993 11.1755 13.5545 11.3806 13.4648L11.3807 13.4648L11.6492 13.3475C12.9514 12.7784 13.6024 12.4938 13.9311 11.9245C14.2599 11.3551 14.1807 10.649 14.0225 9.23678L13.9899 8.94553L13.9899 8.9455C13.9649 8.72304 13.9525 8.61181 13.9525 8.50011C13.9525 8.38841 13.9649 8.27718 13.9899 8.05472L13.9899 8.0547L14.0225 7.76345C14.1807 6.35121 14.2599 5.6451 13.9311 5.07574C13.6024 4.50638 12.9514 4.22184 11.6492 3.65277L11.3807 3.53541C11.1755 3.44576 11.073 3.40093 10.9762 3.34508C10.8795 3.28923 10.7894 3.22282 10.6092 3.08999L10.3733 2.91611C9.22935 2.07295 8.6574 1.65137 7.99996 1.65137ZM7.99996 11.1668C9.47272 11.1668 10.6666 9.97287 10.6666 8.50011C10.6666 7.02735 9.47272 5.83345 7.99996 5.83345C6.5272 5.83345 5.33329 7.02735 5.33329 8.50011C5.33329 9.97287 6.5272 11.1668 7.99996 11.1668Z" fill="white"/>
        </svg> 
        </div>
              <p className="name"> {name}
              {count && <span>{count}</span>}
              <div className="menu-icon">
                 {icon && icon}
             </div>
              </p> 
         {expand}
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}  onClick={() => menu.childMenu && menu.childMenu.length > 0 ? setExpand(!expand) : null}>{menu.name}</NavLink>
              {menu.childMenu  && menu.childMenu.length > 0 && expand  && 
                <ul className="child-menu">
                  {menu.childMenu.map((item, i) => (
                    <li key={i}>
                       <NavLink to={item.to} className={`menu-item`}>{item.name}</NavLink>
                      </li>
                  ))}
                </ul>}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
    
  );
};

export default MenuItem;
