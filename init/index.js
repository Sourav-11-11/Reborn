const mongoose = require('mongoose');
const initData = require('./data.js');
const Product = require("../models/listing.js");

const MONGO_URL = process.env.ATLAS_URL || process.env.MONGO_URL || "mongodb://localhost:27017/reborn";

main()
    .then(() => {
        console.log("Connected to MongoDB");
        return initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("Database initialized with sample products");
    mongoose.connection.close(); // <-- ADD THIS
};
