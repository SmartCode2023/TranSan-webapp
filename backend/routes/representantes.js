const express = require("express");
const {
  createRepresentante,
  getRepresentanteByClerkId,
} = require("../controllers/representantesController");

const router = express.Router();

router.route("/").post(createRepresentante);
router.route("/:id").get(getRepresentanteByClerkId);

module.exports = router;
