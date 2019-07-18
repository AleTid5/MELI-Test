module.exports = class Response {
  constructor() {
    this.data = {
      author: {
        name: "Alejandro",
        lastname: "Tidele"
      }
    };
  }

  flush() {
    return this.data;
  }
};