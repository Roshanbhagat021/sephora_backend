const { Schema, model } = require("mongoose");

const homepagedb1Schema = new Schema({
    id: { type: Number, required: true }, 
    images: { type: [String], required: true },
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
    price: { type: String, required: true },
    btn: { type: String, required: true },
    offer: { type: String, required: true },
    moreDetails: { 
        type: {
            itemNo: String,
            description: String,
            size: String,
            sizeBox: String,
            rating: String,
            loves: String,
            message: String,
        },
        required: true
    },
}, { versionKey: false });

const homePageModel = model("homepagedbone", homepagedb1Schema);

module.exports = homePageModel;
