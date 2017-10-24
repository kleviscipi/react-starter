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

    default:
		return state;
  }
}
