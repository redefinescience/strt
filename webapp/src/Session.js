const KEY = "__STRT_SESSION__";

const Session = {
  set: (data) => sessionStorage.setItem(KEY, JSON.stringify(data)),
  get: () => JSON.parse(sessionStorage.getItem(KEY)),
  clear: () => sessionStorage.removeItem(KEY),
};

export default Session;
