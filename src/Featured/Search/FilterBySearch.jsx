import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  backgroundColor: "#f6f9fc",
  display: "flex",
  alignItems: "center",
  borderRadius: "40px",
  marginLeft: 0,
  padding: "8px 12px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

function FilterBySearch(prop) {
  const [search, setSearch] = useState("");

  const inputRef = useRef("");

  const handleSearch = (e) => {
    setSearch(inputRef.current.value);
  };

  console.log(search);

  return (
    <div className="search">
      <div className="icon-search">
        <Search onChange={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#6b7075", fontSize: "20px" }} />
          </SearchIconWrapper>
          <StyledInputBase
            inputRef={inputRef}
            placeholder="Tên sản phẩm, nhu cầu, hãng..."
            inputProps={{ "aria-label": "search" }}
            style={{ fontSize: "14px", color: "#6b7075" }}
          />
        </Search>
      </div>
    </div>
  );
}

export default FilterBySearch;
