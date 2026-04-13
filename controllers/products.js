const Product = require("../models/listing.js");

module.exports.index = async (req, res) => {
    let { page = 1, limit = 16 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    // Safety check
    if (page < 1) page = 1;

    const count = await Product.countDocuments();
    const totalPages = Math.ceil(count / limit);

    const allProducts = await Product.find({})
        .populate("owner")
        .limit(limit);

    res.render("products/index", { allProducts, currentPage: page, totalPages, limit });
};

module.exports.renderNewForm = (req, res) => {
    res.render("products/new");
};

module.exports.showProduct = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id).populate("owner");
    if (!product) {
        req.flash("error", "Product you requested does not exist!");
        return res.redirect("/products");
    }
    // we use res.locals.showSeller internally or in view
    res.render("products/show", { product, showSeller: req.originalUrl.includes("interested") });
};

module.exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body.product);
    newProduct.owner = req.user._id;
    if (typeof req.file !== "undefined") {
        newProduct.image = req.file.path;
    }
    await newProduct.save();
    req.flash("success", "New product listed successfully!");
    res.redirect("/products");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        req.flash("error", "Product you requested does not exist!");
        return res.redirect("/products");
    }
    res.render("products/edit", { product });
};

module.exports.updateProduct = async (req, res) => {
    let { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, { ...req.body.product });
    if (typeof req.file !== "undefined") {
        product.image = req.file.path;
        await product.save();
    }
    req.flash("success", "Product updated!");
    res.redirect(`/products/${id}`);
};

module.exports.destroyProduct = async (req, res) => {
    let { id } = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success", "Product deleted!");
    res.redirect("/products");
};

module.exports.markAsSold = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    product.sold = true;
    await product.save();
    req.flash("success", "Product marked as sold!");
    res.redirect(`/products/${id}`);
};

module.exports.markAsUnsold = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    product.sold = false;
    await product.save();
    req.flash("success", "Product marked as unsold!");
    res.redirect(`/products/${id}`);
};