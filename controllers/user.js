const Users = require("../models/Users");

class usersController {
  static findAllUsers = async (req, res, next) => {
    Users.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "data not found",
        });
      });
  };

  static createUser = async (req, res, next) => {
    const result = await Users.create({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      queueNumber: req.body.queueNumber,
    });
    result
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err,
        });
      });
  };

  static findUser = async (req, res, next) => {
    Users.findById(req.params.id).then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      res.send({ message: "user found", data });
    });
  };
}

module.exports = usersController;
