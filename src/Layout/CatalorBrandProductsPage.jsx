import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SwiperProducts from "../SwiperProducts";
import CatalorBrandProducts from "../Components/CatalorBrandProducts/CatalorBrandProducts";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import productAPI from "../APIs/productAPI";
import { useSearchParams, useLocation } from "react-router-dom";
import queryString from "query-string";
import FilterProduct from "../Featured/Filters/FilterProduct";
import ListCalalorBrandProducts from "../Components/CatalorBrandProducts/ListCalalorBrandProducts";

function CatalorBrandProductsPage(props) {
  let { catalor } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const prevCategory = useRef();
  const [search, setSearch] = useSearchParams();
  const parsed = queryString.parse(location.search);

  const [filters, setFilters] = useState({
    ...parsed,
    _page: parsed._page || 1,
    _limit: parsed._limit || 15,
    productBrand: catalor,
  });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 15,
  });

  useEffect(() => {
    if (prevCategory.current != catalor) {
      prevCategory.current = catalor;
      filters._page = 1;
      filters.productBrand = catalor;
    }
    const getProducts = async () => {
      const response = await (
        await productAPI.getCatalorProducts(filters)
      ).data;
      setProducts(response.data);
      setPagination(response.pagination);
    };
    getProducts();
  }, [filters]);

  const paginationChange = (e, page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  };

  useEffect(() => {
    setSearch(filters);
  }, [filters]);

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
  };
  return (
    <div>
      <Header />
      <SwiperProducts />
      <div className="catalor-products">
        <Container>
          <CatalorBrandProducts catalor={catalor} />
          <FilterProduct
            onchange={handleFilterChange}
            catalor={catalor}
            filters={filters}
          />
          <ListCalalorBrandProducts products={products} />
        </Container>
      </div>
      <div className="pagination-btn">
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
      <Footer />
    </div>
  );
}

export default CatalorBrandProductsPage;
