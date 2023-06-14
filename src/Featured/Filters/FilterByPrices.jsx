import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormLabel from "@mui/material/FormLabel";

const prices = [
  {
    name: "Nổi bật nhất",
    value: "noibat",
    id: "outstanding",
  },
  {
    name: "Giá thấp → cao",
    value: "asc",
    id: "thapcao",
  },
  {
    name: "Giá cao → thấp",
    value: "desc",
    id: "caothap",
  },
];

function FilterByPrices({ onchange }) {
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
              <span className="text">Sắp xếp: Nổi bật nhất</span>
            </div>
            <div className="icon-dropdown">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </button>
          {openFilter && (
            <div className=" dropdown_group">
              <div className="board-filter_content-prices">
                <div className="form-filter">
                  <Container>
                    <Row>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                          onChange={handleValue}
                        >
                          {prices.length
                            ? prices.map((item, index) => {
                                return (
                                  <FormControlLabel
                                    key={index}
                                    sx={{
                                      "& .MuiSvgIcon-root": {
                                        fontSize: 16,
                                      },
                                      "& .MuiTypography-root": {
                                        fontSize: 16,
                                      },
                                    }}
                                    value={item.value}
                                    control={<Radio />}
                                    label={item.name}
                                  />
                                );
                              })
                            : null}
                        </RadioGroup>
                      </FormControl>
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

export default FilterByPrices;
