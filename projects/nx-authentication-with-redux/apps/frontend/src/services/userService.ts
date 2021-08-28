import { authHeader } from '../helpers';

export const userService = {
  login,
  logout,
  getAll,
};

function login(username: string, password: string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.removeItem('user');
      resolve('ok');
    }, 3000);
  });
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  } as any;

  return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
  return response.text().then((text: string) => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        (window as any).location.reload();
      }

      const error = text || response.statusText;
      return Promise.reject(error);
    }
    const data = text && JSON.parse(text);
    return data;
  });
}
