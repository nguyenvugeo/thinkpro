import React from "react";

function FilterByPromo(props) {
  return (
    <div className="filter-prices">
      <div className="group-button_filter">
        <div className="button-dropdown">
          <button className="button-item">
            <input type="radio" id="html" value="HTML" />
            <label htmlFor="html">Chỉ hiển thị ưu đãi / khuyến mãi</label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterByPromo;
