export function authHeader() {
  const cachedUser = localStorage.getItem('user');
  const user = cachedUser ? JSON.parse(cachedUser) : undefined;

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
