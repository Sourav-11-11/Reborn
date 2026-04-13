const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    product: Joi.object({
        productName: Joi.string().required().max(100),
        category: Joi.string().valid("Clothing", "Footwear", "Accessories", "Home", "Electronics", "Books", "Other").required(),
        condition: Joi.string().valid("New", "Like New", "Used").required(),    
        description: Joi.string().allow("", null).max(1000),
        price: Joi.number().required().min(0).max(100000),
        contactNumber: Joi.string().allow("", null).pattern(/^[0-9]{10}$/),
        image: Joi.string().allow("", null)
    }).required()
});

module.exports.userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .pattern(/[A-Z]/) // At least one uppercase
        .pattern(/[a-z]/) // At least one lowercase
        .pattern(/[0-9]/) // At least one digit
        .pattern(/[!@#$%^&*]/) // At least one special character
        .required()
        .messages({
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)',
            'string.min': 'Password must be at least 8 characters long'
        })
});