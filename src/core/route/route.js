import { matchRoutes } from 'react-router-config'
import Component 		from './route-component.js'

export const exactMatch = (branch) => {
	return branch.match.isExact === true;
}

export const getRouteData = (location) => {
	return matchRoutes(createRoutes(), location.pathname).find(exactMatch);
}

export const createRoutes = () => {
	return [
				{ 
					path:'/app',
					component: Component.Layout.App,
					routes:[
							{
								component: Component.Pages.Home,
								path: '/app',
								exact:true,

							},
						    { 	path: '/app/profile/:id',
						        component:Component.Module.Users.Profile,
						    },
							{
								component: Component.Pages.NotFound
							},

					]

				},
				{	
					path:'/',
					exact:true,
					component: Component.Pages.Login,				
				},
				{	
					path:'/login',
					component: Component.Pages.Login,				
				},
				{
					path:'/singup',
					component: Component.Pages.Singup,
				},

				{
					component: Component.Pages.NotFound
				}

	];
}