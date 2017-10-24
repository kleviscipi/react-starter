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
			component: Component.Layout.App,
			path: '/:rt',
			routes: [
				{ 
					component: Component.Pages.Login,
					path: '/login',

				},
				{
					component: Component.Pages.NotFound
				}
			],
		},
		{
			component: Component.Pages.NotFound
		}
	];
}