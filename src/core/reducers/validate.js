export default function validate(state = {}, action) {
	
  switch (action.type) {
    case 'ERROR_VALIDATIONS':
		return {
			validation: action.validations[0],
			closemodal:false
		};
	case 'NO_ERROR_VALIDATIONS':
		return {closemodal:true};
    case 'CLEAR_VALIDATIONS':
		return {};
    default:
		return state;
  }
}
