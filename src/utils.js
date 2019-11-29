const factUrl = 'https://meowfacts.herokuapp.com/';

function getData(url) {
  return fetch(url).then(response => response.json());
}
export const getFact = () => getData(factUrl);
