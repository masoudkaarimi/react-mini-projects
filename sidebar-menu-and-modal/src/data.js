import {
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaInstagram,
  FaTelegram,
  FaGithub,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://instagram.com/masoudkarimi.ir',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://twitter.com/masoudkaarimi',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://telegram.me/masoudkaarimi',
    icon: <FaTelegram />,
  },
  {
    id: 4,
    url: 'https://github.com/masoudkaarimi',
    icon: <FaGithub />,
  }
];
