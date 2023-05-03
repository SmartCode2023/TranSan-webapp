const mongoose = require("mongoose");

const EnvioSchema = new mongoose.Schema({
  fechaViaje: {
    type: String,
    required: [true, "Por favor digite la fecha de salida"],
  },

  fechaLlegada: {
    type: String,
    required: [true, "Por favor digite la fecha de llegada"],
  },

  horaLlegada: {
    type: String,
    required: [true, "Por favor digite la hora de llegada"],
  },

  dirOrigen: {
    type: String,
    required: [true, "Por favor digite una dirección de origen"],
  },

  dirDestino: {
    type: String,
    required: [true, "Por favor digite una dirección de destino"],
  },

  detalles: {
    type: String,
    required: [true, "Por favor digite los detalles del envío"],
  },

  estado: {
    type: String,
    required: [true, "Por favor digite el estado del envío"],
  },

  empresaId: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Envios", EnvioSchema);
