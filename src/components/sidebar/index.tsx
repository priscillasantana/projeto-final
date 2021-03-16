import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./sidebarData";
import { GrLogout } from "react-icons/gr";
import "./style.scss";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const userName = localStorage.getItem("userName");

  const clear = () => {
    localStorage.clear();
  };

  return (
    <div className="container">
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#">
            <FaIcons.FaBars size={"30px"} onClick={showSidebar} />
          </Link>
          <h3 className="username">Olá, {userName}</h3>
          <a href="/">
            Sair
            <GrLogout onClick={() => clear()} />
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
