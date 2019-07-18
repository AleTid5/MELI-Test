module.exports = {
  baseURL: "https://api.mercadolibre.com",
  itemDescription: (itemId) => { return `/items/${itemId}/description`},
  itemsList: (search) => { return `/sites/MLA/search?q=${search}&limit=4`},
};