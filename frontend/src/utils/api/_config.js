const _config = {
  apiUrl: 'http://localhost:9000',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  paths: {
    getItemPath: (itemId) => {
      return `/api/items/${itemId}`
    },
    getItemsListPath: (search) => {
      return `/api/items?q=${search}`
    }
  }
};

export default _config;