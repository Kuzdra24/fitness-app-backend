const express = require("express");
const { port } = require("./config");
const app = express();

const apiRouter = require("./routes/api");

app.use('/', apiRouter);

app.listen(port, () => {
  console.log(`Server listen... http://localhost:${port}`);
});
