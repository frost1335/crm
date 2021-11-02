require("dotenv").config("./config/.env");
const express = require("express");
const mongoose = require('mongoose')
const exhbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT;


async function start() {
    try {
        await mongoose.connect()
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error.message);
    }
}

start()


