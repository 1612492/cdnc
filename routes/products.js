const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const paramValidation = require("../config/param-validation");
const ProductController = require("../controllers/ProductController");
router
  .route("/")
  .get(ProductController.list)
  .post(validate(paramValidation.createProduct), ProductController.create);

router
  .route("/:productId")
  .get(ProductController.get)
  .put(validate(paramValidation.updateProduct), ProductController.update)
  .delete(ProductController.remove);

router.param("productId", ProductController.load);
module.exports = router;
