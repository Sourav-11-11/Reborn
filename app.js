const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
require('dotenv').config();

const MONGO_URL = process.env.ATLAS_URL || process.env.MONGO_URL || "mongodb://localhost:27017/reborn";
const PORT = process.env.PORT || 8000;

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Security Middleware
app.use(helmet());

// Rate limiting
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, // General requests limited to 100 per 15 minutes
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(generalLimiter); // Apply to all routes

// Request size limits
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json({ limit: "10kb" }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const sessionOptions = {
    secret: process.env.SECRET_KEY || process.env.SECRET || 'fallbacksecret',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, 
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true 
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

const { storage } = require("./cloudConfig.js");
const multer = require("multer");
const upload = multer({ storage });
const wrapAsync = require("./utils/wrapAsync.js");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/donate", (req, res) => {
  res.render("donate");
});

app.post("/donate", upload.single('product[image]'), wrapAsync(async (req, res) => {
  req.flash("success", "Thank you! Your donation was received successfully.");  
  res.redirect("/donate-thank-you");
}));

app.get("/donate-thank-you", (req, res) => {
  res.render("donate-thank-you");
});

app.use("/products", productRouter);
app.use("/", userRouter);

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});