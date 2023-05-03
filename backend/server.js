const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const cotizaciones = require("./routes/cotizaciones");
const envios = require("./routes/envios");
const empresas = require("./routes/empresas");
const representantes = require("./routes/representantes");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Content-Type: application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use("/api/v1/cotizaciones", cotizaciones);
app.use("/api/v1/envios", envios);
app.use("/api/v1/empresas", empresas);
app.use("/api/v1/representantes", representantes);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
