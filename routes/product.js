const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateProduct } = require("../middleware.js");
const productController = require("../controllers/products.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(productController.index))
    .post(isLoggedIn, upload.single('product[image]'), validateProduct, wrapAsync(productController.createProduct));

router.get("/new", isLoggedIn, productController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(productController.showProduct))
    .put(isLoggedIn, isOwner, upload.single('product[image]'), validateProduct, wrapAsync(productController.updateProduct))
    .delete(isLoggedIn, isOwner, wrapAsync(productController.destroyProduct));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(productController.renderEditForm));

router.get("/:id/interested", isLoggedIn, wrapAsync(productController.showProduct));
router.patch("/:id/buy", isLoggedIn, isOwner, wrapAsync(productController.markAsSold));
router.patch("/:id/unsold", isLoggedIn, isOwner, wrapAsync(productController.markAsUnsold));

module.exports = router;