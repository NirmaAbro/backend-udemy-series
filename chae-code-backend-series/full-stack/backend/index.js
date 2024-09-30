// const express = require("express");
// const app = express();
import express from "express";
import cors from "cors";

const app = express();

// cors is aalow the url to connect cross origin resquest

app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hi");
});

// jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the chicken cross the road?",
      punchLine: "To get to the other side!",
    },
    {
      id: 2,
      joke: "Why did the chicken cross the road?",
      punchLine: "To get to the other side!",
    },
    {
      id: 3,
      joke: "Why did the chicken cross the road?",
      punchLine: "To get to the other side!",
    },
    {
      id: 4,
      joke: "Why did the chicken cross the road?",
      punchLine: "To get to the other side!",
    },
  ];
  res.send(jokes);
  console.log("hi");
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));
