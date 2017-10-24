export function getSession(values) {
	
  return (dispatch) => {
    return fetch('/checkLogin.php', {
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
					type: 'GET_SESSION',
					session: [json.data]
				  });
			}else{
				dispatch({
					type: 'LOGIN_REDIRECT'
				});
			}
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'LOGIN_REDIRECT'
          });
        });
      }
    });
  };
  
}
