const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    product: Joi.object({
        productName: Joi.string().required(),
        category: Joi.string().valid("Clothing", "Footwear", "Accessories", "Home", "Electronics", "Books", "Other").required(),
        condition: Joi.string().valid("New", "Like New", "Used").required(),
        description: Joi.string().allow("", null),
        price: Joi.number().required().min(0),
        contactNumber: Joi.string().allow("", null),
        image: Joi.string().allow("", null)
    }).required()
});