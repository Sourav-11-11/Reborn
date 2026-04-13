const User = require("../models/user.js");
const { userSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
    try {
        let { email, username, password } = req.body;
        
        // Validate input
        const { error } = userSchema.validate({ username, email, password });
        if (error) {
            const errMsg = error.details.map((el) => el.message).join(", ");
            req.flash("error", errMsg);
            return res.redirect("/signup");
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            req.flash("error", "Username already exists. Please choose a different username.");
            return res.redirect("/signup");
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            req.flash("error", "Email already registered. Please use a different email or try logging in.");
            return res.redirect("/signup");
        }

        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to ReBorn!");
            res.redirect("/products");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to ReBorn!");
    let redirectUrl = res.locals.redirectUrl || "/products";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/products");
    });
};