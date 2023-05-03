const express = require("express");
const {
  createCotizacion,
  getCotizacionById,
} = require("../controllers/cotizacionesController");

const router = express.Router();

router.route("/").post(createCotizacion);
router.route("/:id").get(getCotizacionById);

module.exports = router;
