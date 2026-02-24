const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/listing.js");
const path = require("path");
const MONGO_URL= "mongodb://localhost:27017/reborn";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

//about route
app.get("/about", (req, res) => {
  res.render("about");
  
});

//index route
app.get("/products", async (req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index", {allProducts});
});

//new route
app.get("/products/new", (req, res) => {
    res.render("products/new");
});

//Show Route
app.get("/products/:id", async (req, res) => {
  let { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.send("Product not found");
  }
  res.render("products/show", { product });
});


//Create Route
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body.product);
  await newProduct.save();
  res.redirect("/products");
});

//Edit Route
app.get("/products/:id/edit", async (req, res) => {
  let { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

//Update Route
app.put("/products/:id", async (req, res) => {
  let { id } = req.params;
  await Product.findByIdAndUpdate(id, { ...req.body.product });
  res.redirect(`/products/${id}`);
});

//delete route
app.delete("/products/:id", async (req, res) => {
  let { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.send("Product not found or already deleted");
  }
  console.log("Deleted product:", deletedProduct._id);
  res.redirect("/products");
});


// app.get("/testProduct", async (req, res) => {
//   let sampleProduct = new Product({
//     productName: "Vintage Denim Jacket",
//     category: "Clothing",
//     condition: "Like New",
//     description: "Classic vintage denim jacket",
//     price: 25,
//     isSold: false
//     });

//     await sampleProduct.save();
//     res.send("Sample product created");
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
}); 

app.listen(8000, () => {
    console.log("Server is running on port 8000")
});

