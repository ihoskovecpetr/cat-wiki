const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3003/"
    : "https://test-app-123d.herokuapp.com/";

module.exports = origin;
