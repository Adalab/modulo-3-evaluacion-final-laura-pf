const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const set = (key, value) => {
  const localStorageData = value;
  localStorage.setItem(key, localStorageData);
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

const objectToExport = {
  get: get,
  set: set,
  remove: remove,
  clear: clear,
};

export default objectToExport;
