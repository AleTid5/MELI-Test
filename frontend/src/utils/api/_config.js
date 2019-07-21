export default {
  apiUrl: 'http://localhost:9000',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  paths: {
    getItemPath: (itemId) => `/api/items/${itemId}`,
    getItemsListPath: (search) => `/api/items?q=${search}`
  }
};