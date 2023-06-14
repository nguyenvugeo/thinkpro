import React from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

function Index(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    const action = registerThunk(data);
    try {
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      if (user.email) {
        enqueueSnackbar("Dang Ky Thanh Cong", { variant: "success" });
        navigate("/login");
      }
    } catch (err) {
      enqueueSnackbar("Dang Ky That Bai", { variant: "error" });
    }
  };

  return <Register handleRegister={handleRegister} />;
}

export default Index;
