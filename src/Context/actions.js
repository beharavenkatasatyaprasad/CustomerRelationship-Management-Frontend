const ROOT_URL = 'http://localhost:4000';

export async function loginUser(dispatch, loginPayload) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();
		if (response.status === 202) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			localStorage.setItem('token',data.token);
			return data;
		}else{
			dispatch({ type: 'LOGIN_ERROR', error: data.error });
			return data;
		}
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
