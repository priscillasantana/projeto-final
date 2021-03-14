import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <IoIcons.IoMdBeer />,
        cName: 'nav-text'
    },
    {
        title: 'New Beer',
        path: '/newbeer',
        icon: <FaIcons.FaPlusCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <BsIcons.BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
    {
        title: 'New User',
        path: '/newuser',
        icon: <BsIcons.BsFillPersonPlusFill />,
        cName: 'nav-text'
    },
];