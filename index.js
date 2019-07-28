// const express = require("express");

const app = require("./server/server");

const port = process.env.PORT || 1662;
// app.set('port', process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// console.log(app.get('port'))
// app.listen(app.get('port'));
