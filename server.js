const app = require("./app");

const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(7070, () => {
      console.log("Server running. Use our API on port: 7070");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
