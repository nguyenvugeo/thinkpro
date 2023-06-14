import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import Badge from "@mui/material/Badge";
import { cartItemsSelector } from "../Cart/CartSelector";
import { cartSubPriceSelector } from "../Cart/CartSelector";
import { removeFromCart } from "../Cart/CartSlice";
import { Button } from "@mui/material";
import FilterBySearch from "../../Featured/Search/FilterBySearch";
import { logout } from "../Authenciation/authSlice";

function Header(props) {
  const user = useSelector((state) => state.auth.currentUser);
  const isLogged = user.email;

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // const [isLogged, setIsLogged] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const action = logout();

  const open = Boolean(anchorEl);
  const menuOpen = Boolean(menuAnchorEl);

  const cartItemsCount = useSelector(cartItemsSelector);

  const cartSubPrice = useSelector(cartSubPriceSelector);

  const cartItems = useSelector((state) => {
    localStorage.setItem("items", JSON.stringify(state.cart.cartItems));
    return state.cart.cartItems;
  });

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveItem = (item) => {
    const action = removeFromCart(item);
    dispatch(action);
  };

  const renderEmptyCart = () => {
    return (
      <div className="empty-cart pd-20">
        <div className="empty-cart_img">
          <img src="/Assets/ImageCart/emtybox.jpg" alt="" />
        </div>
        <div className="empty-cart_content">
          <div className="empty-cart_content-text">
            <h5 className="block mg-0 font-semibold text-h5">Giỏ hàng trống</h5>
          </div>
          <div className="btn-cart_empty">
            <button className="t-button">
              <Link to="/">Khám phá ngay</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderMiniCart = () => {
    return (
      <div className="mini_cart-products">
        {cartItems.length
          ? cartItems.map((item) => {
              return (
                <li className="product flex align-center" key={item.id}>
                  <div className="flex align-center">
                    <div className="thumb">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h3 className="text-h3 font-semibold">
                        {item.productName}
                      </h3>
                      <h4 className="text-h4 text-pink font-semibold">
                        {item.productPromotionalPrice
                          ? item.productPromotionalPrice
                          : item.productPrice}
                      </h4>
                    </div>
                  </div>
                  <div className="remove-item flex align-center gap-20px">
                    <div className="quantity">{item.quantity}x</div>
                    <button
                      className="mini_cart-btn--del"
                      onClick={() => handleRemoveItem(item)}
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })
          : null}
        <h2>Total: {VND.format(cartSubPrice)}</h2>
        <div className="mini_cart-btn">
          <Button variant="contained" sx={{ color: "#fff" }}>
            <Link to="/cart-page">View Cart</Link>
          </Button>
          <Button variant="contained">
            <Link to="#">Checkout</Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <Container fluid="xl">
        <div className="header-group">
          <div className="group-1">
            <div className="logo">
              <Link to="/" className="nav-link">
                <img
                  src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
                  alt=""
                />
              </Link>
            </div>
            <FilterBySearch />
            <div className="telephone text-14 font-weight-600">
              <a className="box-hover" href="/">
                <i className="fas fa-phone-alt mg-right-5"></i>
                1900.63.63
              </a>
            </div>

            <div className="address text-14 font-weight-600">
              <a className="box-hover" href="/">
                <i className="fas fa-map-marker mg-right-5"></i>
                Địa chỉ cửa hàng
              </a>
            </div>
            <div className="support text-14 font-weight-600">
              <a className="box-hover" href="/">
                <i className="fas fa-headphones mg-right-5"></i>
                Hỗ trợ
              </a>
            </div>
          </div>
          <div className="tp flex gap-12px">
            <div className="cart">
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="add to shopping cart"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ backgroundColor: "#f6f9fc" }}
                  size="large"
                  color="inherit"
                >
                  <Badge
                    badgeContent={cartItemsCount}
                    className="badge-icon"
                    color="error"
                  >
                    <ShoppingCartIcon
                      style={{ color: "#1c1f23" }}
                      fontSize="small"
                    />
                  </Badge>
                </IconButton>
              </Stack>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {cartItems.length > 0 ? renderMiniCart() : renderEmptyCart()}
              </Menu>
            </div>
            <div className="authenciation-account">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <PersonIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={menuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  {isLogged ? user.email : <Link to="/login">Log in</Link>}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  {isLogged ? (
                    <p onClick={() => dispatch(action)}>Logout</p>
                  ) : (
                    <Link to="/register">Register</Link>
                  )}
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
