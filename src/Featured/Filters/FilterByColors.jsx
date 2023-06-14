import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productAPI from "../../APIs/productAPI";

function FilterByColors({ onchange, productCategory, catalor }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggling = () => setOpenFilter(!openFilter);
  const [getColors, setGetColors] = useState();
  const [childColors, setChildColors] = useState();

  useEffect(() => {
    const getCatalorBrands = async () => {
      const data = await (await productAPI.getCatalorBrand(catalor)).data;
      setChildColors(data);
    };
    getCatalorBrands();
  }, [catalor]);


  useEffect(() => {
    const getListBrands = async () => {
      const data = await (await productAPI.getByBrand(productCategory)).data;
      setGetColors(data);
    };
    getListBrands();
  }, [productCategory]);

  const handleValue = (value) => {
    onchange(value);
  };

  const handleChildColor = (value) => {
    onchange(value);
  };

  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button onClick={toggling} className="button-item">
            <div className="text-span">
              <span className="text">Màu sắc</span>
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
                    </Row>
                    <Row>
                      {getColors.length
                        ? getColors[0].filters.colors.map((item, index) => {
                            return (
                              <Col md={6} key={index}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="colors"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleValue(item)}
                                  />
                                  <label htmlFor="colors">{item}</label>
                                </div>
                              </Col>
                            );
                          })
                        : childColors[0].filters.colors.map((item, index) => {
                            return (
                              <Col md={6} key={index}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="colors"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleChildColor(item)}
                                  />
                                  <label htmlFor="colors">{item}</label>
                                </div>
                              </Col>
                            );
                          })}
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

export default FilterByColors;
