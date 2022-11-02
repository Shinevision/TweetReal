import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Tweet = ({ user, text }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          height: isCommenting ? "35vh" : "20vh",
          width: "100%",
          p: 2,
          mt: 5,
        }}
      >
        <Typography variant="caption">{user}</Typography>
        <Typography>{text}</Typography>
        {isCommenting && (
          <TextField
            label="Tweet"
            variant="outlined"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <Button
          variant="contained"
          sx={{ float: "right", m: 2 }}
          size="large"
          onClick={() => setIsCommenting((c) => !c)}
        >
          {isCommenting ? "Cancel" : "Comment"}
        </Button>
        {isCommenting && (
          <Button
            variant="contained"
            sx={{ float: "right", m: 2 }}
            size="large"
            onClick={() => setIsCommenting((c) => !c)}
          >
            Place
          </Button>
        )}
      </Paper>
    </Grid>
  );
};
