const express = require("express");
const app = require("./server/server");
const port = process.env.PORT || 1662;

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
// app.set('port', process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// console.log(app.get('port'))
// app.listen(app.get('port'));
