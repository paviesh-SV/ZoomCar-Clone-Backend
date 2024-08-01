import express from "express";
import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import { requireSignin } from "../middleware/auth.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const newUser = await new User({
            username,
            password: hashedPassword,
        }).save();

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.json({
            user: {
                name: newUser.name,
            },
            token,
        });

        res.send("New user registered succesfully")

    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {

    try {
        const { username, password } = req.body

        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ error: "User not found" });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({ error: "Wrong password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.json({
            user: {
                name: user.name,
            },
            token,
        });
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
});

router.get("/auth-check", requireSignin, (req, res) => {
    res.json({ ok: true });
});
export default router;