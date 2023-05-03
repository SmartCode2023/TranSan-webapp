const express = require("express");
const {
  createEmpresa,
  getEmpresaById,
  getAllEmpresas,
} = require("../controllers/empresasController");

const router = express.Router();

router.route("/").post(createEmpresa).get(getAllEmpresas);
router.route("/:id").get(getEmpresaById);

module.exports = router;
