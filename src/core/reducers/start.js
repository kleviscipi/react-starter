export default function start(state = {}, action) {
  switch (action.type) {
    case 'GET_SESSION':
		return Object.assign({}, state, {
			session: action.session[0],
			loadingApp: false,
			login_redirect: false
		});
	break;
	
	case 'LOGIN_REDIRECT':
		return Object.assign({}, state, {
			login_redirect:true
		});
	break;
	
    default:
		return state;
  }
}
