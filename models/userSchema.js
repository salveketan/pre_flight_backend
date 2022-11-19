const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: "String", required: true },
    salary: { type: "Number", required: true },
    email: { type: "String", required: true },
    phone: { type: "String", required: true },
    city: { type: "String", required: true },
    state: { type: "String", required: true },
}, {
    timestamps: true,
    versionKey: false
}
)

const User = mongoose.model("User", userSchema)
module.exports = User