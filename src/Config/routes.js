import React from 'react';
import Login from '../components/Login/Loginform';
import Home from '../components/Home/Home';
import Leads from '../components/Leads/Leads'
const routes = [
	{
		path: '/home',
		component: Home,
		isPrivate: true,
	},
	{
		path: '/leads',
		component: Leads,
		isPrivate: true,
	},
	{
		path: '/',
		component: Login,
		isPrivate: false,
	},
];

export default routes;