import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItem = [
    {
        title: 'Dashboard',
        path: '/home',
        icon: <IoIcons.IoIosChatboxes />,
        cName: 'nav-text'
    },
    {
        title: 'Course',
        path: '/course',
        icon: <IoIcons.IoIosBook />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <IoIcons.IoIosCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <IoIcons.IoIosSettings />,
        cName: 'nav-text'
    }
];