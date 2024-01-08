const Poetry = require("../model/PoertyModel");

exports.createPoetry = async (req, res) => {
  await Poetry.create(req.body);
  res.send("poetry created successfully");
};
exports.getPoetry = async (req, res) => {
  const result = await Poetry.find();
  res.status(200).json({
    status: "success",
    data: result,
  });
};

// exports.getPoetry = async (req, res, next) => {
//   const poetry = await Poetry.find();
//   res.status(200).json({ status: "success", data: poetry });
// };
