export default function messages(state = {}, action) {
  switch (action.type) {
    case 'ERROR_MESSAGES':
		return {
			error: action.messages
		};
    case 'SUCCESS_MESSAGES':
		return {
			success: action.messages
		};
    case 'WARNING_MESSAGES':
		return {
			warning: action.messages
		};
    case 'CLEAR_MESSAGES':
		return {};
    default:
		return state;
  }
}
