const KEY = 'refresh-token';

export const getRefreshToken = () => {
  return window.localStorage.getItem(KEY);
};

export const setRefreshToken = (refreshToken) => {
  window.localStorage.setItem(KEY, refreshToken);
};

export const removeRefreshToken = () => {
  window.localStorage.removeItem(KEY);
};
