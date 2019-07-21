import Api from "./api";
import config from "./_config";

export default new (class ApiItems extends Api {
  constructor() {
    super(config.apiUrl);
  }

  searchItemById = async (productId) => await this.getFrom(config.paths.getItemPath(productId));

  searchItems = async (searchInput) => await this.getFrom(config.paths.getItemsListPath(searchInput));
})();