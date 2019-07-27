const express = require("express");

const app = require("./server/server");

const port = process.env.PORT || 1662;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});