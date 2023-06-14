import React from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Index(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const action = loginThunk(data);
    try {
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      if (user.email) {
        enqueueSnackbar("Đăng Nhập Thành Công", { variant: "success" });
        navigate("/");
      }
    } catch (err) {
      enqueueSnackbar("Đăng Nhập Thất Bại", { variant: "error" });
    }
  };

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export default Index;
