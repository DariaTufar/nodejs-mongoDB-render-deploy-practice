const app = require('./app')

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const DB_HOST =
  "mongodb+srv://daria:wgjmW5kpapRYHohA@cluster0.pznk3uq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));


app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
