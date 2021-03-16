import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { GrLogout } from "react-icons/gr";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Produtos",
    path: "/products",
    icon: <IoIcons.IoMdBeer />,
    cName: "nav-text",
  },
  {
    title: "Cadastrar cerveja",
    path: "/newbeer",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Sair",
    path: "/",
    icon: <GrLogout />,
    cName: "nav-text",
  },
];
