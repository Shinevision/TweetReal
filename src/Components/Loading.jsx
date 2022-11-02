import { CircularProgress } from "@mui/material";
import React from "react";

const size = 50;

export const Loading = () => {
  return (
    <CircularProgress
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 1000,
        width: `${size}px !important`,
        height: `${size}px !important`,
        marginLeft: `-${size / 2}px !important`,
        marginTop: `-${size / 2}px !important`,
      }}
    />
  );
};
