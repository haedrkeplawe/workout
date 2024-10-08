require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const db = "mongodb://localhost:27017/test3";

const port = process.env.PORT || 4000;
const WorkoutRoute = require("./routes/WorkoutRoute");
const userRoute = require("./routes/user");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/workout", WorkoutRoute);
app.use("/user", userRoute);

mongoose
  .connect(
    "mongodb+srv://alihassanhaedr:c4a@cluster0.ue5ezcc.mongodb.net/2024workout2?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
