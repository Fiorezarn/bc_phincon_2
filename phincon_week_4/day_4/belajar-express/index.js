const express = require("express");
const data = require("./json/product.json");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  const name = req.query.name;
  const harga = Number(req.query.price);

  let product = data;

  if (name) {
    product = product.filter((item) => item.name.includes(name));
  }

  if (harga) {
    product = product.filter((item) => item.price === harga);
  }

  res.json(product);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = data.find((item) => item.id == id);
  res.json(product);
});

app.get("/total", (req, res) => {
  const total = data.reduce((acc, item) => acc + item.price, 0);
  res.status(200).json({ status: 200, message: "success", total: total });
});

app.post("/calculation", (req, res) => {
  const { a, b, operator } = req.body;
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return res.status(400).send({
        message: "operator tidak dikenali",
      });
  }

  res.send({
    a,
    b,
    operator,
    result,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
