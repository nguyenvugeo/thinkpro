import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FilterByPriceRange({ onchange }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggling = () => setOpenFilter(!openFilter);

  const handleValue = (e) => {
    onchange(e.target.value);
  };

  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button onClick={toggling} className="button-item">
            <div className="text-span">
              <span className="text">Khoảng giá</span>
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
                            value="0 - 1000000000"
                            onClick={handleValue}
                          />
                          <label for="all">Tất cả</label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="10to20"
                            name="fav_language"
                            value="10000000 - 20000000"
                            onClick={handleValue}
                          />
                          <label for="10den20">Từ 10tr đến 20tr</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="20to30"
                            name="fav_language"
                            value="20000000 - 30000000"
                            onClick={handleValue}
                          />
                          <label for="20to30">Từ 20tr đến 30tr</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="30to40"
                            name="fav_language"
                            value="30000000 - 40000000"
                            onClick={handleValue}
                          />
                          <label for="30to40">Từ 30tr đến 40tr</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="40to50"
                            name="fav_language"
                            value="40000000 - 50000000"
                            onClick={handleValue}
                          />
                          <label for="40to50">Từ 40tr đến 50tr</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="up50"
                            name="fav_language"
                            value="50000000"
                            onClick={handleValue}
                          />
                          <label for="up50">Trên 50tr</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="down10"
                            name="fav_language"
                            value="0 - 10000000"
                            onClick={handleValue}
                          />
                          <label for="down10">Dưới 10tr</label>
                        </div>
                      </Col>
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

export default FilterByPriceRange;
