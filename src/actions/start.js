/********************************

This is a example of request api.
THis projest is just a simulation.

*********************************
Example CAll Api per your login:

export function session(values) {
	
  return (dispatch) => {
    return fetch('/login', {
		method: 'GET',
		credentials: 'same-origin',
		headers: { 
		  'Content-Type': 'application/x-www-form-urlencoded' //'application/json' 
		}
    }).then((response) => {
		
      if (response.ok) {
        return response.json().then((json) => {
			if(json.data.login){
				dispatch({
					type: 'SET_SESSION',
					session: [json.data]
				  });
			}else{
				dispatch({
					type: 'REDIRECT'
				});
			}
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'REDIRECT'
          });
        });
      }
    });
  };
  
}
*/

export function login(values) {
	
  return (dispatch) => {

  		if(values.password == '123456' && values.email=='cipiklevis@gmail.com'){

			dispatch({
				type: 'LOGIN_SUCCESS',
				logged: true
		 	});

			dispatch({
				type: 'SUCCESS_MESSAGES',
				messages: ['Logged successfully']
		 	});
  		}else{

			dispatch({
				type: 'LOGIN_FALURE',
				logged: false
		 	});

			dispatch({
				type: 'ERROR_MESSAGES',
				messages: ['Email or password wrong!']
		 	});
		dispatch({
			type: 'CLEAR_MESSAGES',
	 	});
  		}


  };
  
}


export function profile(values) {
	
  return (dispatch) => {


			dispatch({
				type: 'CANCEL_SESSION',
				
				profile: {
					name:'Klevis Cipi',
					email:'cipiklevis@gmail.com',
					description:"This is my profile"
				}
		 	});

  };
  
}





