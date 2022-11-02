import { Container, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { MainAppBar } from "../Components/MainAppBar";

export const Dashboard = () => {
  const columns = [{ field: "id", headerName: "ID", width: 90 }];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      <MainAppBar />
      <Paper sx={{ height: "50vh", width: "100%" }}>
        <DataGrid
          rows={[]}
          columns={columns}
          disableSelectionOnClick
          autoPageSize
        />
      </Paper>
    </Container>
  );
};
