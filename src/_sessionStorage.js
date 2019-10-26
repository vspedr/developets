export const getSessionStorage = key => {
  if (typeof window === 'undefined' ||
    !window.sessionStorage ||
    typeof window.sessionStorage.getItem !== 'function') {
    return null;
  }

  const value = window.sessionStorage.getItem(key);
  return JSON.parse(value);
};

export const setSessionStorage = (key, value) => {
  if (typeof window === 'undefined' ||
    !window.sessionStorage ||
    typeof window.sessionStorage.setItem !== 'function') {
    return null;
  }

  const stringValue = JSON.stringify(value);
  return window.sessionStorage.setItem(key, stringValue);
};

export const cacheRequest = async (key, pageNum, fn) => {
  const storageKey = `${key}-${pageNum}`;
  const cache = getSessionStorage(storageKey);
  if (cache) { return cache; }
  const result = await fn;
  setSessionStorage(storageKey, result);
  return result;
};

