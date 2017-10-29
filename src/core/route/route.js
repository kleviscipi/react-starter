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
					path:'/react-starter-deploy',
					component: Component.Layout.App,
					routes:[
							{
								component: Component.Pages.Home,
								path: '/react-starter-deploy',
								exact:true,

							},
						    { 	path: '/react-starter-deploy/profile/:id',
						        component:Component.Module.Users.Profile,
						    },
							{	
								path:'/react-starter-deploy/login',
								exact:true,
								component: Component.Pages.Login,				
							},
							{
								path:'/react-starter-deploy/singup',
								component: Component.Pages.Singup,
							},
							{
								component: Component.Pages.NotFound
							},

					]

				},


				{
					component: Component.Pages.NotFound
				}

	];
}