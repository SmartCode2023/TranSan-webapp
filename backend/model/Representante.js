const mongoose = require("mongoose");

const RepresentanteSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: [true],
  },

  empresaId: {
    type: String,
    required: [true],
  },

  nombre: {
    type: String,
    required: [true, "Por favor digite su nombre"],
  },

  apellido: {
    type: String,
    required: [true, "Por favor digite su apellido"],
  },

  cargo: {
    type: String,
    required: [true, "Por favor digite su cargo"],
  },

  email: {
    type: String,
    required: [true, "Por favor digite su email"],
  },
});

module.exports = mongoose.model("Representantes", RepresentanteSchema);
