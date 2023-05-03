const mongoose = require("mongoose");

const CotizacionSchema = new mongoose.Schema({
  fechaViaje: {
    type: String,
    required: [true, "Por favor digite una fecha"],
  },

  dirOrigen: {
    type: String,
    required: [true, "Por favor digite una dirección de origen"],
  },

  dirDestino: {
    type: String,
    required: [true, "Por favor digite una dirección de destino"],
  },

  peso: {
    type: Number,
    required: [true, "Por favor digite el peso"],
  },

  alto: {
    type: Number,
    required: [true, "Por favor digite el alto"],
  },

  ancho: {
    type: Number,
    required: [true, "Por favor digite el ancho"],
  },

  largo: {
    type: Number,
    required: [true, "Por favor digite el largo"],
  },

  tipo: {
    type: String,
  },

  condiciones: {
    type: String,
  },

  servicioCarga: {
    type: String,
  },
});

module.exports = mongoose.model("Cotizaciones", CotizacionSchema);
