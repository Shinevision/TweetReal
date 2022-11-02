import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router";
import { MainAppBar } from "../Components/MainAppBar";
import { getUser } from "../Queries/UserQueries";

export const Profile = () => {
  const { data: user } = useQuery(["user"], getUser);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      <MainAppBar />
      <Paper sx={{ height: "50vh", width: "100%", p: 2 }}>
        <Button onClick={() => navigate("/")} variant="contained">
          Terug
        </Button>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4">Profiel</Typography>
          </Grid>

          <Grid item>
            <Typography>
              {user?.firstName} {user?.middleName} {user?.lastName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{user.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
