const mongoose = require("mongoose");

const EmpresaSchema = new mongoose.Schema({
  razonSocial: {
    type: String,
    required: [true, "Por favor digite su razón social"],
  },

  nit: {
    type: String,
    required: [true, "Por favor digite su NIT"],
  },

  paginaWeb: {
    type: String,
    required: [true, "Por favor digite su página web"],
  },

  dirPostal: {
    type: String,
    required: [true, "Por favor digite su dirección postal"],
  },

  telefono: {
    type: Number,
    required: [true, "Por favor digite el telefono"],
  },

  email: {
    type: String,
    required: [true, "Por favor digite el email corporativo"],
  },

  adminId: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Empresas", EmpresaSchema);
