import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productAPI from "../../APIs/productAPI";

function FilterByStatus({ onchange, productCategory, catalor }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggling = () => setOpenFilter(!openFilter);
  const [getStatus, setGetStatus] = useState();

  const handleValue = (value) => {
    onchange(value);
  };

  useEffect(() => {
    const getByBrands = async () => {
      const data = await (await productAPI.getByBrand(productCategory)).data;
      setGetStatus(data);
    };
    getByBrands();
  }, [productCategory]);

  const [childStatus, setChildStatus] = useState();

  useEffect(() => {
    const getCatalorBrands = async () => {
      const data = await (await productAPI.getCatalorBrand(catalor)).data;
      setChildStatus(data);
    };
    getCatalorBrands();
  }, [catalor]);

  const handleChildStatus = (value) => {
    onchange(value);
  };

  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button onClick={toggling} className="button-item">
            <div className="text-span">
              <span className="text">Tình trạng</span>
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
                            value="Tất cả"
                            onClick={() => handleValue()}
                          />
                          <label for="all">Tất cả</label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {getStatus.length
                        ? getStatus[0].filters.status.map((item, index) => {
                            return (
                              <Col md={12} key={item.id}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="status"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleValue(item)}
                                  />
                                  <label for="status">{item}</label>
                                </div>
                              </Col>
                            );
                          })
                        : childStatus[0].filters.status.map((item, index) => {
                            return (
                              <Col md={12} key={item.id}>
                                <div className="items-filter">
                                  <input
                                    type="radio"
                                    id="status"
                                    name="fav_language"
                                    value={item}
                                    onClick={() => handleChildStatus(item)}
                                  />
                                  <label for="status">{item}</label>
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

export default FilterByStatus;
