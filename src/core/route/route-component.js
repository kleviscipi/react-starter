
//Layout App
import App 		from '../../components/App.jsx'

//Pages
import Home 		from '../../components/Home.jsx'
import Login 		from '../../components/pages/Login.jsx'
import Singup 		from '../../components/pages/Singup.jsx'
import NotFound 	from '../../components/NotFound.jsx';
//Modules

//Users 
import Profile 	from '../../components/modules/users/Profile.jsx';

let Component =  {

	Layout:{
		App
	},

	Pages:{
		Login,
		Singup,
		Home,
		NotFound 
	},

	Module:{
		Users:{
			Profile
		}
	}
}


export default Component;

