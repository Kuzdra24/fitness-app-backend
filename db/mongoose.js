const mongoose = require("mongoose");
const { url } = require("../config");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, connectionParams);
