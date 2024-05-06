const { Schema, model } = require("mongoose");

const beautyofferSchema = new Schema({
    id: { type: Number, required: true },
    images: { type: [String], required: true },
    products1: {
        title: { type: String, required: true },
        paragraph: { type: String, required: true },
        para2: { type: String, required: true },
        para3: { type: String, required: true },
        btn: { type: String, required: true },
        btn2: { type: String, required: true },
        link: { type: String, required: true }
    },
    products2: {
        title: { type: String, required: true },
        paragraph: { type: String, required: true },
        coins: { type: String, required: true },
        btn: { type: String, required: true }
    }
}, { versionKey: false });

const beautyofferModel = model("beautyofferdata", beautyofferSchema);

module.exports = beautyofferModel;
