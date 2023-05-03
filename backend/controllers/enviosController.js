const Envio = require("../model/Envio");

exports.createEnvio = async (req, res, next) => {
  const envio = await Envio.create(req.body);
  res.status(201).json({ envio });
};

exports.getAllEnvios = async (req, res, next) => {
  const { empId } = req.query;
  const envios = await Envio.find({ empresaId: empId });
  res.status(200).json({ envios });
};

exports.getEnvioById = async (req, res, next) => {
  const { id } = req.params;
  const envio = await Envio.findOne({ _id: id });
  if (!envio) {
    throw new Exception("El envío no existe: " + id);
  }
  res.status(200).json({ envio });
};
