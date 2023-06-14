import React, { useState, useEffect } from "react";
import FilterByBrand from "./FilterByBrand";
import FilterByColors from "./FilterByColors";
import FilterByExigency from "./FilterByExigency";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByPromo from "./FilterByPromo";
import FilterBySource from "./FilterBySource";
import FilterByStatus from "./FilterByStatus";
import Container from "react-bootstrap/esm/Container";
import FilterByPrices from "./FilterByPrices";
import productAPI from "../../APIs/productAPI";

function FilterProduct({ filters, onchange, productCategory, catalor }) {
  const [childBrand, setChildBrand] = useState({});

  useEffect(() => {
    const getChildBrands = async () => {
      const data = await (await productAPI.getAllBrand()).data;
      data.forEach((element) => {
        if (element.brands) {
          let x = element.brands.filter((item) => item.uid == catalor);
          if (x.length > 0) {
            setChildBrand(x[0]);
          }
        }
      });
    };

    getChildBrands();
  }, []);

  const handleFilterByBrand = (value) => {
    const newFilter = {
      ...filters,
      productBrand: value,
    };
    onchange(newFilter);
  };

  const handleFilterByChildBrand = (value) => {
    const newFilter = {
      ...filters,
      productModel: value,
    };
    onchange(newFilter);
  };

  const handleFilterByColors = (value) => {
    const newFilter = {
      ...filters,
      colorList: value,
    };
    onchange(newFilter);
  };
  const handleFilterByExigency = (value) => {
    const newFilter = {
      ...filters,
      demand_like: value,
    };
    onchange(newFilter);
  };

  const handleFilterByPriceRange = (value) => {
    const valuePrices = value.split(" - ");
    const newFilter = {
      ...filters,
      productPrice_gte: valuePrices[0],
      productPrice_lte: valuePrices[1],
    };
    onchange(newFilter);
  };
  const handleFilterBySource = (value) => {
    const newFilter = {
      ...filters,
      productStatus_like: value,
    };
    onchange(newFilter);
  };
  const handleFilterByStatus = (value) => {
    const newFilter = {
      ...filters,
      productStatus_like: value,
    };
    onchange(newFilter);
  };

  const handleFilterByPrices = (value) => {
    const newFilter = {
      ...filters,
      _sort: "productPrice",
      _order: value,
    };
    onchange(newFilter);
  };

  const handleFilterByPromo = (value) => {};

  return (
    <Container>
      <div className="filter-product">
        <FilterByPrices filters={filters} onchange={handleFilterByPrices} />
        <FilterByBrand
          productCategory={productCategory}
          onchange={(handleFilterByBrand)}
          onChildChange={(handleFilterByChildBrand)}
          filters={filters}
          childBrand={childBrand}
        />
        <FilterByColors
          productCategory={productCategory}
          onchange={handleFilterByColors}
          filters={filters}
          childBrand={childBrand}
          catalor={catalor}
        />
        <FilterByPromo onchange={handleFilterByPromo} filters={filters} />
        <FilterByExigency
          productCategory={productCategory}
          onchange={handleFilterByExigency}
          filters={filters}
          catalor={catalor}
        />

        <FilterBySource onchange={handleFilterBySource} filters={filters} />
        <FilterByStatus
          productCategory={productCategory}
          onchange={handleFilterByStatus}
          filters={filters}
          catalor={catalor}
        />
        <FilterByPriceRange
          onchange={handleFilterByPriceRange}
          filters={filters}
        />
      </div>
    </Container>
  );
}

export default FilterProduct;
