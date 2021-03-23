import React from 'react';
import Login from '../components/Login/Loginform';
import Home from '../components/Home/Home';
import Leads from '../components/Leads/Leads'
import createLead from '../components/Leads/Addlead'
import customers from '../components/Customers/Customers'
import contacts from '../components/Contacts/Contacts'
const routes = [
	{
		path: '/home',
		component: Home,
		isPrivate: true,
	},
	{
		path: '/leads/create',
		component: createLead,
		isPrivate: true,
	},
	{
		path: '/leads',
		component: Leads,
		isPrivate: true,
	},
	
	{
		path: '/customers',
		component: customers,
		isPrivate: true,
	},
	{
		path: '/contacts',
		component: contacts,
		isPrivate: true,
	},
	{
		path: '/',
		component: Login,
		isPrivate: false,
	},
];

export default routes;