const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.send("App is running..!!!!");
});
router.get("/hello", (req, res) => {
  res.send("Привет! Меня зовут Айдар");
});
app.use("/", router);
module.exports.handler = serverless(app);
// const port = 8080;
//app.listen(process.env.PORT || port, () => {
//	console.log(`Listening on port ${port}`);
//});
