import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function FilterBySource({ onchange }) {
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
              <span className="text">Nguồn hàng</span>
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
                            value="Mới"
                            onClick={handleValue}
                          />
                          <label htmlFor="all">Tất cả</label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="chinhhang"
                            name="fav_language"
                            value="Chính hãng"
                            onClick={handleValue}
                          />
                          <label htmlFor="chinhhang">Chính hãng</label>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="items-filter">
                          <input
                            type="radio"
                            id="nhapkhau"
                            name="fav_language"
                            value="Nhập khẩu"
                            onClick={handleValue}
                          />
                          <label htmlFor="nhapkhau">Nhập khẩu</label>
                        </div>
                      </Col>
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

export default FilterBySource;
