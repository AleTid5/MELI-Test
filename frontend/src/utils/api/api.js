import axios from "axios";
import config from "./_config";

export default class Api {
  constructor(url) {
    this.api = axios.create({
      baseURL: url,
      headers: config.headers
    });
  }

  getFrom = async uri => await this.api.get(uri).then(response => response.data);
}