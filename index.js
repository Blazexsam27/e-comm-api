const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const productRoutes = require("./routes/products");

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("SERVER IS LISTENING");
});
