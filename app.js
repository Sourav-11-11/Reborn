const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/listing.js");
const path = require("path");
const MONGO_URL= "mongodb://localhost:27017/reborn";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const multer = require("multer");
const fs = require("fs");

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "public/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// MongoDB Connection
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL)
}

// Middleware Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// Wrapper function for async route handlers
const wrapAsync = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};

// Routes

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Donate Form Route
app.get("/donate", (req, res) => {
  res.render("donate");
});

// Donate Submit Route
app.post("/donate", upload.single('product[image]'), wrapAsync(async (req, res) => {
  const productData = req.body.product || {};
  // Ensure price is set for schema requirement; default donations to 0
  productData.price = productData.price ?? 0;
  
  // Use uploaded file
  if (req.file) {
    productData.image = `/uploads/${req.file.filename}`;
  }

  const donation = new Product(productData);
  await donation.save();
  res.redirect("/donate-thank-you");
}));

// Donate Thank You Route
app.get("/donate-thank-you", (req, res) => {
  res.render("donate-thank-you");
});

// Products Index Route (List all)
app.get("/products", wrapAsync(async (req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index", {allProducts});
}));

// Products New Route (Form)
app.get("/products/new", (req, res) => {
    res.render("products/new");
});

// Product Show Route (Details)
app.get("/products/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }
  res.render("products/show", { product, showSeller: false });
}));

// Products Create Route
app.post("/products", upload.single('product[image]'), wrapAsync(async (req, res) => {
  const productData = req.body.product || {};
  
  // Use uploaded file
  if (req.file) {
    productData.image = `/uploads/${req.file.filename}`;
  }
  
  const newProduct = new Product(productData);
  await newProduct.save();
  res.redirect("/products");
}));

// Products Edit Route (Form)
app.get("/products/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }
  res.render("products/edit", { product });
}));

// Products Update Route
app.put("/products/:id", upload.single('product[image]'), wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const updateData = { ...req.body.product };
  
  // Use uploaded file if provided
  if (req.file) {
    updateData.image = `/uploads/${req.file.filename}`;
  }
  
  const product = await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }
  res.redirect(`/products/${id}`);
}));

// Interested to Buy Route (Show Seller Details)
app.get("/products/:id/interested", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }
  res.render("products/show", { product, showSeller: true });
}));

// Mark as Sold Route
app.patch("/products/:id/buy", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }

  product.sold = true;
  await product.save();
  res.redirect(`/products/${id}`);
}));

// Mark as Unsold Route
app.patch("/products/:id/unsold", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).render("error", { message: "Product not found" });
  }

  product.sold = false;
  await product.save();
  res.redirect(`/products/${id}`);
}));

// Delete Route
app.delete("/products/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("error", { message: "Invalid product ID" });
  }
  
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).render("error", { message: "Product not found or already deleted" });
  }
  console.log("Deleted product:", deletedProduct._id);
  res.redirect("/products");
}));

// 404 Route
app.use((req, res) => {
  res.status(404).render("error", { message: "Page not found" });
});

// Generic Error Handler
app.use((err, req, res, next) => {
  console.error("Error handling request:", err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).render("error", { message });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  res.status(status).render("error", { message });
}); 

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

