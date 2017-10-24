import { combineReducers } 	from 'redux';
import global 				from './global';

import messages 			from './messages';
import validate 			from './validate';

export default combineReducers({
  global,
  messages,
  validate
});

