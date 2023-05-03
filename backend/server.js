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

app.use("/api/v1/cotizaciones", cotizaciones);
app.use("/api/v1/envios", envios);
app.use("/api/v1/empresas", empresas);
app.use("/api/v1/representantes", representantes);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
