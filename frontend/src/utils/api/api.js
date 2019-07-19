import axios from "axios";
import config from "./config";

class Api {
  _api;

  constructor() {
    this._api = axios.create({
      author: config.author,
      baseURL: config.baseURL,
      headers: config.headers
    });
  }

  searchItem = async (searchInput) => {
    return await this._api.get("/api/items?q=" + searchInput).then(response => response.data);
  }

  searchItemById = async (productId) => {
    return await this._api.get("/api/items/" + productId).then(response => response.data);
  }
}

const api = new Api();

export default api;