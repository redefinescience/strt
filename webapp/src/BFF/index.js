import config from "../config";

const FETCH_OPT = {
  mode: "cors",
  credentials: "include",
  cache: "no-store",
};

const POST_OPT = {
  ...FETCH_OPT,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const API_ROUTES = {
  login: "/login",
  logout: "/login/logout",
};

const jsonr = (response) =>
  response
    .json()
    .catch(() => null)
    .then((payload) => ({ response, payload }));

export const fetchAuth = (returnpath) => {
  const url = new URL(`${config.bff}${API_ROUTES.login}`);
  if (returnpath) {
    url.searchParams.append("returnpath", returnpath);
  }
  return fetch(url, FETCH_OPT).then(jsonr);
};

export const loginAuth = (body) => {
  const url = new URL(`${config.bff}${API_ROUTES.login}`);
  return fetch(url, {
    ...POST_OPT,
    body: JSON.stringify(body),
  }).then(jsonr);
};
