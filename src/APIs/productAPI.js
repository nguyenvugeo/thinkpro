import requestClients from "./requestClients";
const productAPI = {
  getAllProducts: () => {
    let url = "products";
    return requestClients.get(url);
  },

  getDealProducts: (uid) => {
    let url = `collections/?uid=${uid}`;
    return requestClients.get(url);
  },

  getAllDealProducts: () => {
    let url = "products";
    return requestClients.get(url);
  },

  getSomeProducts: (newParams) => {
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === undefined) {
        delete newParams[key];
      }
    });

    let url = "products";
    return requestClients.get(url, { params: newParams });
  },

  getCatalorProducts: (newParams) => {
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === undefined) {
        delete newParams[key];
      }
    });

    let url = "products";
    return requestClients.get(url, { params: newParams });
  },

  getByProducts: (filter, pagination) => {
    let params = {
      _page: pagination ? pagination._page : 1,
      _limit: pagination ? pagination._limit : 10,
      productCategory: filter,
      ...filter,
    };

    let url = "products";
    return requestClients.get(url, { params: params });
  },

  getAllBrand: () => {
    let url = "product-categories";
    return requestClients.get(url);
  },

  getByBrand: (uid) => {
    let url = `product-categories?uid=${uid}`;
    return requestClients.get(url);
  },

  getCatalorBrand: () => {
    let url = "product-categories";
    return requestClients.get(url);
  },

  getByID: (uid) => {
    let url = `products/?uid=${uid}`;
    return requestClients.get(url);
  },

  getAllProductsCatargories: () => {
    let url = "product-categories";
    return requestClients.get(url);
  },

  getAllCollections: () => {
    let url = "collections";
    return requestClients.get(url);
  },

  getProductPromo: () => {
    let url = "featured-promotion";
    return requestClients.get(url);
  },

  getProductPreOrder: () => {
    let url = "pre-order";
    return requestClients.get(url);
  },
};

export default productAPI;
