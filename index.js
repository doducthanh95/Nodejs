const express = require("express");
const initRouter = require("./routers/router");
const app = express();

initRouter(app);

app.listen(3000, () => {
    console.log("server start at port 3000");
})