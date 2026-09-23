const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./route");

app.use("/", routes);

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});