export function setUserSession(session_data) {
  window.localStorage['token'] = session_data.token;
  window.localStorage['id'] = session_data.id;
  window.localStorage['user_name'] = session_data.user_name;
  window.location.reload();
}

export function IsLoggedIn() {
  return window.localStorage['token'] !== undefined;
}

export function LogOut() {
  window.localStorage.clear();
  window.location = '/';
}