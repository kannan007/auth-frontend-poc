import { createContext } from 'react';

export const getToken = () => {
  let token = localStorage.getItem('token');
  return token;
};

export const isLoggedIn = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) return false;

  return true;
};

export const isLoggedInContext = createContext(isLoggedIn());

export const setToken = (obj) => {
  const token = JSON.parse(localStorage.getItem('token'));
  Object.keys(obj).forEach((key) => {
    token[key] = obj[key];
  });
  localStorage.setItem('token', JSON.stringify(token));
  return getToken();
};

export const clearStorage = () => {
  localStorage.clear();
};
