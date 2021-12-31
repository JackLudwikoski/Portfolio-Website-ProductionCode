const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
//const logger = require("morgan");

const port = process.env.PORT || 3001;

//app.use(logger('dev'));

app.use(cors());

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/password/", require("./routes/passwordRoute"));

app.use("/contactSubmit", require("./routes/contactSubmitRoute.js"));

app.use("/messages", require("./routes/messagesRoute"));

app.listen(port);