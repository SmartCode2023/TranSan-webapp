const Representante = require("../model/Representante");

exports.createRepresentante = async (req, res, next) => {
  const representante = await Representante.create(req.body);
  res.status(201).json({ representante });
};

exports.getRepresentanteByClerkId = async (req, res, next) => {
  const { id } = req.params;
  const representante = await Representante.findOne({ clerkId: id });
  if (!representante) {
    throw new Exception("El representante no existe: " + id);
  }
  res.status(200).json({ representante });
};
