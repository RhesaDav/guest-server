var express = require("express");
var router = express.Router();

var usersController = require("../controllers/user");

router.get("/", usersController.findAllUsers);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.deleteUser);
router.get("/:id", usersController.findUser);

module.exports = router;
