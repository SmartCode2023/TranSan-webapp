const Empresa = require("../model/Empresa");

exports.createEmpresa = async (req, res, next) => {
  const empresa = await Empresa.create(req.body);
  res.status(201).json({ empresa });
};

exports.getAllEmpresas = async (req, res, next) => {
  const empresas = await Empresa.find({});
  res.status(200).json({ empresas });
};

exports.getEmpresaById = async (req, res, next) => {
  const { id } = req.params;
  const empresa = await Empresa.findOne({ _id: id });
  if (!empresa) {
    throw new Exception("La empresa no existe: " + id);
  }
  res.status(200).json({ empresa });
};
