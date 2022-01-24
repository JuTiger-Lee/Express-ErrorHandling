const express = require("express");
const indexRouter = require("./routes/index");
const { notFound, serverError } = require("./middleware/error");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

indexRouter(app);

app.use(notFound);
app.use(serverError);

app.listen(8081, () => console.log("8081 server start"));
