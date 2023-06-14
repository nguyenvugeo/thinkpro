import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productAPI from "../../APIs/productAPI";

function FilterByBrand({ onchange, productCategory, onChildChange, childBrand }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggling = () => setOpenFilter(!openFilter);
  const [nameBrand, setNameBrand] = useState();

  useEffect(() => {
    const getListBrands = async () => {
      const data = await (await productAPI.getByBrand(productCategory)).data;
      setNameBrand(data);
    };

    getListBrands();
  }, [productCategory]);

  const handleValue = (value) => {
    onchange(value);
  };

  const handleModelName = (value) => {
    onChildChange(value);
  };

  const renderAllBrand = () => {
    return (
      <Col>
        <div className="items-filter">
          <input
            type="radio"
            id="all"
            name="fav_language"
            value="all"
            onClick={() => handleValue()}
          />
          <label htmlFor="all">Tất cả</label>
        </div>
      </Col>
    );
  };

  const renderChildAllBrand = () => {
    return (
      <Col>
        <div className="items-filter">
          <input
            type="radio"
            id="all"
            name="fav_language"
            value="all"
            onClick={() => handleModelName()}
          />
          <label htmlFor="all">Tất cả</label>
        </div>
      </Col>
    );
  };

  const renderFilterBrand = () => {
    return nameBrand[0].brands.map((item, index) => {
      return (
        <Col md={4} key={item.index}>
          <div className="items-filter">
            <input
              type="radio"
              id="brands"
              name="fav_language"
              onClick={() => handleValue(item.uid)}
            />
            <label htmlFor="brands">{item.name}</label>
          </div>
        </Col>
      );
    });
  };

  const renderFilterChildBrand = () => {
    if (childBrand.hasOwnProperty("models")) {
      return childBrand.models.map((item, index) => {
        return (
          <Col md={4} key={index}>
            <div className="items-filter">
              <input
                type="radio"
                id="brands"
                name="fav_language"
                onClick={() => handleModelName(item.uid)}
              />
              <label htmlFor="brands">{item.modelName}</label>
            </div>
          </Col>
        );
      });
    }
  };

  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button onClick={toggling} className="button-item">
            <div className="text-span">
              <span className="text">Thương hiệu</span>
            </div>
            <div className="icon-dropdown">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </button>
          {openFilter && (
            <div className=" dropdown_group">
              <div className="board-filter_content">
                <form className="form-filter" action="">
                  <Container>
                    <Row>
                      {nameBrand.length
                        ? renderAllBrand()
                        : renderChildAllBrand()}
                    </Row>
                    <Row>
                      {nameBrand.length
                        ? renderFilterBrand()
                        : renderFilterChildBrand()}
                    </Row>
                  </Container>
                </form>
              </div>
              <div className="popper-arrow"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterByBrand;
