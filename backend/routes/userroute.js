const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/usercontroller");

router.route("/cards").get(userControllers.getCard);
router.route("/cards").post(userControllers.create);
router.route("/cards/:title").get(userControllers.getCardById);

module.exports = router;
