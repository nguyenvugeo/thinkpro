import React from "react";
import Container from "react-bootstrap/Container";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import SwiperComponents from "./Components/MainContent/SwiperComponents/SwiperComponents";

import "swiper/css";
import "swiper/css/navigation";

function SwiperProducts(props) {
  return (
    <Container>
      <div className="slide-products">
        <SwiperComponents
          style={{ position: "relative" }}
          navigatior={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        />
        <div className="swiper-navigation">
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <div className="swiper-prev">
              <NavigateBeforeIcon />
            </div>
            <div className="swiper-next">
              <NavigateNextIcon />
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default SwiperProducts;
