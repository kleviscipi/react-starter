export default function start(state = {}, action) {
  switch (action.type) {
	
	case 'LOGIN_SUCCESS':
		return Object.assign({}, state, {
			logged:action.logged
		});
	break;

	case 'LOGIN_FALURE':
		return Object.assign({}, state, {
			logged:action.logged
		});
	break;	

	case 'SINGUP_FALURE':
		return Object.assign({}, state, {
			singup:action.singup
		});
	break;	

	case 'SINGUP_SUCCESS':
		return Object.assign({}, state, {
			singup:action.singup
		});
	break;	

	case 'START_PROFILE':
		return Object.assign({}, state, {
			loadingprofile:action.loading
		})
	break;

	case 'END_PROFILE':
		return Object.assign({}, state, {
			loadingprofile:action.loading
		})
	break;

	case 'RENDER_PROFILE':
		return Object.assign({}, state, {
			profile:action.profile
		})
	break;

    default:
		return state;
  }
}
