import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Background',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Red',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Blue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Green',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Skin',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dragon',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Ogre',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Elf',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Outfit',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Spacesuit',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cowboy',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Wizard',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
  
];