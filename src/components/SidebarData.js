// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';

// export const SidebarData = [
//   {
//     title: 'Overview',
//     path: '/overview',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Users',
//         path: '/overview/users',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Revenue',
//         path: '/overview/revenue',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />
//   }
// ];

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/beranda',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/rekomendasi',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/rakbukusaya',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/Koleksi',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/tentang',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];