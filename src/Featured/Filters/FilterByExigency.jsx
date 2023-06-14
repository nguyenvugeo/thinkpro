import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productAPI from "../../APIs/productAPI";

function FilterByExigency({ onchange, productCategory, catalor }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggling = () => setOpenFilter(!openFilter);
  const [getDemand, setGetDemand] = useState();

  useEffect(() => {
    const getListBrands = async () => {
      const data = await (await productAPI.getByBrand(productCategory)).data;
      setGetDemand(data);
    };
    getListBrands();
  }, [productCategory]);

  const [childDemand, setChildDemand] = useState();

  useEffect(() => {
    const getCatalorBrands = async () => {
      const data = await (await productAPI.getCatalorBrand(catalor)).data;
      setChildDemand(data);
    };
    getCatalorBrands();
  }, [catalor]);

  const handleChildDemand = (value) => {
    onchange(value);
  };

  const handleValue = (value) => {
    onchange(value);
  };

  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button onClick={toggling} className="button-item">
            <div className="text-span">
              <span className="text">Nhu cầu</span>
            </div>
            <div className="icon-dropdown">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </button>
          {openFilter && (
            <div className="dropdown_group">
              <div className="board-filter_content">
                <div className="form-filter">
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
                      {getDemand.length
                        ? getDemand[0].filters.demand.map((item, index) => {
                            return (
                              <Col md={6} key={index}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="demand"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleValue(item)}
                                  />
                                  <label htmlFor="demand">{item}</label>
                                </div>
                              </Col>
                            );
                          })
                        : childDemand[0].filters.demand.map((item, index) => {
                            return (
                              <Col md={6} key={index}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="demand"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleChildDemand(item)}
                                  />
                                  <label htmlFor="demand">{item}</label>
                                </div>
                              </Col>
                            );
                          })}
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="popper-arrow"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterByExigency;
