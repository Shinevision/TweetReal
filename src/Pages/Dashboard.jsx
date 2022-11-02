import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { MainAppBar } from "../Components/MainAppBar";
import { Tweet } from "./Tweet";

const canPlace = Math.random() >= 0.5;

export const Dashboard = () => {
  const [tweets, setTweets] = useState([
    {
      user: "User",
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto.",
    },
    {
      user: "User",
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto.",
    },
    {
      user: "User",
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto.",
    },
    {
      user: "User",
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto.",
    },
    {
      user: "User",
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus dolorum non dolor magni, nesciunt est consequatur perspiciatis. Repudiandae ab aliquam deleniti ex dolorem dolor similique labore consectetur a architecto.",
    },
  ]);

  const [text, setText] = useState("");

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      <MainAppBar />
      <Paper sx={{ height: "30vh", width: "100%", p: 2 }}>
        <TextField
          label="Tweet"
          variant="outlined"
          sx={{ width: "100%" }}
          multiline
          rows={4}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ float: "right", m: 2 }}
          size="large"
          disabled={!canPlace}
          onClick={() => {
            setTweets((t) => [{ user: "LoggedInUser", tweet: text }, ...t]);
          }}
        >
          Place
        </Button>
      </Paper>

      <Grid container spacing={2}>
        {tweets.map(({ user, tweet }) => (
          <Tweet user={user} text={tweet} />
        ))}
      </Grid>
    </Container>
  );
};
