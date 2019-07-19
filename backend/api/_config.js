module.exports = {
  apiURL: "https://api.mercadolibre.com",
  paths: {
    getItemPath: (itemId) => {
      return `/items/${itemId}`
    },
    getItemDescriptionPath: (itemId) => {
      return `/items/${itemId}/description`
    },
    getItemsListPath: (search) => {
      return `/sites/MLA/search?q=${search}&limit=4`
    }
  }
};