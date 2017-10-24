import { combineReducers } 	from 'redux';
import start 				from './start';

import messages 			from './messages';
import validate 			from './validate';

export default combineReducers({
  start,
  messages,
  validate
});

