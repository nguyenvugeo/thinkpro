import React, { useEffect, useState, useRef } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import ProductsColection from "../Components/ProductsColection/ProductsColection";
import { useParams } from "react-router-dom";
import FilterProduct from "../Featured/Filters/FilterProduct";
import ListProductsColection from "../Components/ProductsColection/ListProductsColection";
import productAPI from "../APIs/productAPI";
import Pagination from "@mui/material/Pagination";
import { useSearchParams, useLocation } from "react-router-dom";
import queryString from "query-string";

function PageColection(props) {
  const location = useLocation();
  const { productCategory } = useParams();
  const [search, setSearch] = useSearchParams();
  const parsed = queryString.parse(location.search);
  const [products, setProducts] = useState([]);
  const prevCategory = useRef();

  const [filters, setFilters] = useState({
    ...parsed,
    _page: parsed._page || 1,
    _limit: parsed._limit || 10,
    productCategory,
  });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
  });

  const paginationChange = (e, page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  };

  useEffect(() => {
    setSearch(filters);
  }, [filters]);

  useEffect(() => {
    if (prevCategory.current != productCategory) {
      prevCategory.current = productCategory;
      filters._page = 1;
      filters.productCategory = productCategory;
    }

    const getProducts = async () => {
      const response = await (await productAPI.getSomeProducts(filters)).data;
      setProducts(response.data);
      setPagination(response.pagination);
    };
    getProducts();
  }, [filters, productCategory]);

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
  };
  return (
    <div className="page-colection">
      <Header />
      <SwiperProducts />
      <div className="products-colection">
        <ProductsColection productCategory={productCategory} />
        <FilterProduct
          filters={filters}
          onchange={handleFilterChange}
          productCategory={productCategory}
        />
        <ListProductsColection products={products} />
        <div>
          {products.length ? (
            <div className="add_products-list">
              <Pagination
                count={Math.ceil(pagination._totalRows / pagination._limit)}
                page={pagination._page}
                color="primary"
                onChange={paginationChange}
              />
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageColection;
