import { AccountCircle, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router";
import { useLogoutUserQuery } from "../Queries/UserQueries";

export const MainAppBar = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: logout } = useLogoutUserQuery({
    onSuccess: () => {
      navigate("/login");
      queryClient.invalidateQueries(["user"]);
    },
  });
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {}}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={() => navigate("/")}
          >
            App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => {
                logout();
              }}
              sx={{ color: "#fff" }}
            >
              Logout
            </Button>
            <IconButton onClick={() => navigate("/profile")}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
