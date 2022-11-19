const express = require("express");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await User.find()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(401).send({ message: error.message })
    }
})

router.post("/", async (req, res) => {
    const { name, salary, email, phone, city, state } = req.body;
    if (!name || !salary || !email || !phone || !city || !state) {
        return res.status(301).send({ message: "fill all data" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(401).send({ message: "user already exist" })
        }
        const user = await User.create(req.body)
        return res.status(201).send(user)

    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(201).send(user)
    } catch (error) {
        return res.status(401).send({ message: error.message })
    }
})

module.exports = router;