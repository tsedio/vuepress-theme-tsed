let API;

export function getApi(url) {

  if (API) {
    return API;
  }

  API = fetch(url).then((response) => response.json());

  return API;
}