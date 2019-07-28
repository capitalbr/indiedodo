// const express = require("express");

const app = require("./server/server");

const port = process.env.PORT || 3001;
// app.set('port', process.env.PORT || 8080);

app.listen(1662, () => {
  console.log(`Server listening on port ${1662}`);
});
// console.log(app.get('port'))
// app.listen(app.get('port'));
