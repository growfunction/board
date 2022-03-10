import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.svg";
import SettingIcon from "../assets/svg/setting-icon";
import MenuItem from "./MenuItem";
import SelectProjectMenu from "./SelectProjectMenu";

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    count: 18,
    className: 'right',
  },
  {
    name: "Main",
    exact: true,
    to: `/Main`,
  },
  { name: "Reports",
    to: `/Reports`,
    icon: <SettingIcon />,
    count: 1,
    subTitle: 'edfdzc',
    subMenus: [
      { name: "Customer activity", to: "#"},
      { name: "Financial", to: "#"},
    { name: "Analytic", to: "#" },
    { name: "Statistic", to: "#", 
          childMenu: [
          { name: "Daily report", to:  "#" },
          { name: "Bonus deduction", to:  "#" },
          { name: "GGR by provider", to:  "#" },
        ], 
    },
    { name: "Responsivle gaming", to: "#" },
    { name: "Retention", to: "#" },
    { name: "Security", to: "#" },
    { name: "KYC", to: "#" },
    ]},
  {
    icon: <SettingIcon />,
    name: "Payment Handler",
    exact: true,
    to: `/Payment-Handler`,
    subMenus: [
      { name: "Item", to: "#" },
      { name: "Item", to: "#" },
    ],
  },
  { name: "Mail Templates", to: `Mail-Templates` },
  { name: "Autobonus", to: `/Autobonus`},
  { name: "Daily Report", to: `/Daily-Report` },
  { name: "Payment Handler Deposit", to: `/Payment-Handler-Deposit` },
  { name: "Finance Export", to: `/Finance-Export` },
  { name: "Email Send Form", to: `/Email-SendForm` },
  { name: "Administration",
  icon: <SettingIcon />,
    to: `/Administration`,
    subMenus: [
      { name: "Item", to: "#" },
      { name: "Item", to: "#" },
    ],
   }, 

  { name: "F.A.Q", to: `/FAQ` },
];
export const seletMenuItems = [
  { 
    name: "CRM",
    to: `/CRM`,
    subMenus: [
      { name: "Item", to: "#" },
      { name: "Item", to: "#" },
    ],
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <a href="/" className="logo">
          <img src={logo} alt="webscript" />
        </a>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 9.99992V9.33325H9.33337V9.99992H10ZM13.5286 14.4713C13.789 14.7317 14.2111 14.7317 14.4714 14.4713C14.7318 14.211 14.7318 13.7889 14.4714 13.5285L13.5286 14.4713ZM10 5.99992H9.33337V6.66659H10V5.99992ZM14.4714 2.47133C14.7318 2.21097 14.7318 1.78887 14.4714 1.52851C14.2111 1.26817 13.789 1.26817 13.5286 1.52851L14.4714 2.47133ZM6.00004 9.99992H6.66671V9.33325H6.00004V9.99992ZM1.52863 13.5285C1.26829 13.7889 1.26829 14.211 1.52863 14.4713C1.78899 14.7317 2.21109 14.7317 2.47145 14.4713L1.52863 13.5285ZM6.00004 5.99992V6.66659H6.66671V5.99992H6.00004ZM2.47145 1.52851C2.21109 1.26817 1.78899 1.26817 1.52863 1.52851C1.26829 1.78887 1.26829 2.21097 1.52863 2.47133L2.47145 1.52851ZM10.6667 13.3333V9.99992H9.33337V13.3333H10.6667ZM10 10.6666H13.3334V9.33325H10V10.6666ZM9.52864 10.4713L13.5286 14.4713L14.4714 13.5285L10.4714 9.52852L9.52864 10.4713ZM9.33337 2.66659V5.99992H10.6667V2.66659H9.33337ZM10 6.66659H13.3334V5.33325H10V6.66659ZM10.4714 6.47133L14.4714 2.47133L13.5286 1.52851L9.52864 5.52851L10.4714 6.47133ZM6.66671 13.3333V9.99992H5.33337V13.3333H6.66671ZM6.00004 9.33325H2.66671V10.6666H6.00004V9.33325ZM5.52863 9.52852L1.52863 13.5285L2.47145 14.4713L6.47145 10.4713L5.52863 9.52852ZM5.33337 2.66659V5.99992H6.66671V2.66659H5.33337ZM6.00004 5.33325H2.66671V6.66659H6.00004V5.33325ZM6.47145 5.52851L2.47145 1.52851L1.52863 2.47133L5.52863 6.47133L6.47145 5.52851Z" fill="#CCD2E3"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 9.99992V9.33325H9.33337V9.99992H10ZM13.5286 14.4713C13.789 14.7317 14.2111 14.7317 14.4714 14.4713C14.7318 14.211 14.7318 13.7889 14.4714 13.5285L13.5286 14.4713ZM10 5.99992H9.33337V6.66659H10V5.99992ZM14.4714 2.47133C14.7318 2.21097 14.7318 1.78887 14.4714 1.52851C14.2111 1.26817 13.789 1.26817 13.5286 1.52851L14.4714 2.47133ZM6.00004 9.99992H6.66671V9.33325H6.00004V9.99992ZM1.52863 13.5285C1.26829 13.7889 1.26829 14.211 1.52863 14.4713C1.78899 14.7317 2.21109 14.7317 2.47145 14.4713L1.52863 13.5285ZM6.00004 5.99992V6.66659H6.66671V5.99992H6.00004ZM2.47145 1.52851C2.21109 1.26817 1.78899 1.26817 1.52863 1.52851C1.26829 1.78887 1.26829 2.21097 1.52863 2.47133L2.47145 1.52851ZM10.6667 13.3333V9.99992H9.33337V13.3333H10.6667ZM10 10.6666H13.3334V9.33325H10V10.6666ZM9.52864 10.4713L13.5286 14.4713L14.4714 13.5285L10.4714 9.52852L9.52864 10.4713ZM9.33337 2.66659V5.99992H10.6667V2.66659H9.33337ZM10 6.66659H13.3334V5.33325H10V6.66659ZM10.4714 6.47133L14.4714 2.47133L13.5286 1.52851L9.52864 5.52851L10.4714 6.47133ZM6.66671 13.3333V9.99992H5.33337V13.3333H6.66671ZM6.00004 9.33325H2.66671V10.6666H6.00004V9.33325ZM5.52863 9.52852L1.52863 13.5285L2.47145 14.4713L6.47145 10.4713L5.52863 9.52852ZM5.33337 2.66659V5.99992H6.66671V2.66659H5.33337ZM6.00004 5.33325H2.66671V6.66659H6.00004V5.33325ZM6.47145 5.52851L2.47145 1.52851L1.52863 2.47133L5.52863 6.47133L6.47145 5.52851Z" fill="#CCD2E3"/>
            </svg>
          )}
        </div>
      </div>

      <div className="main-menu top-main-menu">
        <p className="title">CHOOSE PROJECT</p>
        <ul>
            {seletMenuItems.map((menuItem, index) => (
              <SelectProjectMenu
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
        </ul>
      </div>
      <div className="main-menu">
        <ul className="mb-15">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              icon={menuItem.icon} 
              inactive
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false); 
                } 
              }}
              count={menuItem.count}
            />
          ))}

        </ul>
        <div className="side-menu-footer">
        <div className="user-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <g opacity="0.6">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 7.4999H6.58608L5.21917 5.79126L6.78091 4.54187L9.44758 7.8752L9.94733 8.4999L9.44758 9.12459L6.78091 12.4579L5.21917 11.2085L6.58608 9.4999H3.33337C3.33338 12.1128 3.33503 13.4212 4.03826 14.2567C4.24949 14.5076 4.50044 14.7222 4.78113 14.8919C5.71779 15.4583 7.01449 15.2545 9.6079 14.847C10.9091 14.6425 11.5596 14.5403 11.9993 14.1474C12.1328 14.0281 12.2497 13.8914 12.3469 13.741C12.6667 13.2456 12.6667 12.5871 12.6667 11.2699V5.72931C12.6667 4.41217 12.6667 3.7536 12.3469 3.25829C12.2497 3.10786 12.1328 2.97116 11.9993 2.85185C11.5596 2.45899 10.9091 2.35676 9.6079 2.15229C7.01449 1.74475 5.71779 1.54099 4.78113 2.10733C4.50044 2.27705 4.24949 2.49165 4.03826 2.74259C3.33498 3.57806 3.33338 4.88661 3.33337 7.4999Z" fill="white"/>
          </g>
          </svg>
          <a href="#">Sign out</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideMenu;
