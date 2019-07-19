import Api from "./api";
import config from "./_config";

export default new (class ApiItems extends Api {
  constructor() {
    super(config.apiUrl);
  }

  searchItemById = async (productId) => {
    return await this.getFrom(config.paths.getItemPath(productId))
  }

  searchItems = async (searchInput) => {
    return await this.getFrom(config.paths.getItemsListPath(searchInput))
  }
})();