import { useState } from 'react';

// retrieve value from query string
// supports IE
const getQueryString = queryString => {
  const name = queryString.replace(/\[/, '\\[').replace(/\]/, '\\]');
  const values = new RegExp(`[\\?&]${name}=([^&#]*)`).exec(window.location.search);
  return values
    ? decodeURIComponent(values[1].replace(/\+/g, ' '))
    : '';
};

export const usePage = (queryString = 'page') => {
  // try to retrieve page from query string
  // ensure it is Number or else returns default value
  const value = getQueryString(queryString);
  const page = Number(value);
  const currentPage = isNaN(page) ? 1 : page;

  return useState(currentPage);
};
