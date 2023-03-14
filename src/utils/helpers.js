export const fetchData = (key) => JSON.parse(localStorage.getItem(key));

export const removeData = ({ key }) => {
  localStorage.removeItem(key);
};
