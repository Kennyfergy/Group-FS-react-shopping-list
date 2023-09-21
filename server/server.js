const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
/** ---------- MIDDLEWARE ---------- **/
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // needed for axios requests
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`

const itemsRouter = require("./routes/items.router");

app.use(`/items`, itemsRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
