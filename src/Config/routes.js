import React from 'react';
import Login from '../components/Login/Loginform';
import Home from '../components/Home/Home';
import Leads from '../components/Leads/Leads'
import createLead from '../components/Leads/Addlead'
import customers from '../components/Customers/Customers'
import Contacts from '../components/Contacts/Contacts'
import DeleteLead from '../components/Leads/DeleteLead';
import Editlead from '../components/Leads/Editlead';
import AddContact from '../components/Contacts/AddContact'
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
		path: '/leads/delete/:id',
		component: DeleteLead,
		isPrivate: true,
	},
	{
		path: '/leads/edit/:id',
		component: Editlead,
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
		path: '/contacts/create',
		component: AddContact,
		isPrivate: true,
	},
	{
		path: '/leads/delete/:id',
		component: DeleteLead,
		isPrivate: true,
	},
	{
		path: '/contacts/edit/:id',
		component: Editlead,
		isPrivate: true,
	},
	{
		path: '/contacts',
		component: Contacts,
		isPrivate: true,
	},

	{
		path: '/',
		component: Login,
		isPrivate: false,
	},
];

export default routes;