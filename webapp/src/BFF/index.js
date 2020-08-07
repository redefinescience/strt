import config from "../config";

const FETCH_OPT = {
  mode: "cors",
  credentials: "include",
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

export const fetchAuth = (returnpath) => {
  const url = new URL(`${config.bff}${API_ROUTES.login}`);
  if (returnpath) {
    url.searchParams.append("returnpath", returnpath);
  }
  return fetch(url, FETCH_OPT);
};

export const loginAuth = (body) => {
  const url = new URL(`${config.bff}${API_ROUTES.login}`);
  return fetch(url, {
    ...POST_OPT,
    body: JSON.stringify(body),
  });
};
