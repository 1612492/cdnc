const express = require("express");
const router = express.Router();
const config = require("../config/index");

const usersRoutes = require("./users");
const productsRoutes = require("./products");
const ordersRoutes = require("./orders");
const cartRoutes = require("./cart");

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.json({ message: "Welcome" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  return res.json({ message: "About" });
});

router.use("/user", usersRoutes);
router.use("/products", productsRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", ordersRoutes);

module.exports = router;
