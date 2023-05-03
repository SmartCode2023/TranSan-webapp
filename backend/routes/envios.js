const express = require("express");
const {
  createEnvio,
  getAllEnvios,
  getEnvioById,
} = require("../controllers/enviosController");

const router = express.Router();

router.route("/").post(createEnvio).get(getAllEnvios);
router.route("/:id").get(getEnvioById);

module.exports = router;
