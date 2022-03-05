import { FaGithub, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

export const links = [
	{
		id: 1,
		url: '/',
		text: 'home',
	},
	{
		id: 2,
		url: '/about',
		text: 'about',
	},
	{
		id: 3,
		url: '/projects',
		text: 'projects',
	},
	{
		id: 4,
		url: '/contact',
		text: 'contact',
	},
	{
		id: 5,
		url: '/profile',
		text: 'profile',
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
	},
];
