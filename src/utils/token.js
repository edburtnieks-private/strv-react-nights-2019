const KEY = 'token';

export const getToken = () => {
  return window.localStorage.getItem(KEY);
};

export const setToken = (token) => {
  window.localStorage.setItem(KEY, token);
};

export const removeToken = () => {
  window.localStorage.removeItem(KEY);
};
