const SOCKET_URL = (function () {
  if (process.env.NODE_ENV === "development") return "http://localhost:8000";
  return "https://fire-chat01.herokuapp.com";
})();

module.exports = { SOCKET_URL };
