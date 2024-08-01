import express from "express";
import Car from "../models/carModel.js";

const router = express.Router();

router.post("/addcar", async (req, res) => {
    try {
        const newcar = new Car(req.body)
        await newcar.save()
        res.send('Car Added successfully')
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.post("/editcar", async (req, res) => {
    try {
        const car = await Car.findOne({ _id: req.body._id })
        car.name = req.body.name
        car.image = req.body.image
        car.fuelType = req.body.fuelType
        car.rentPerHour = req.body.rentPerHour
        car.capacity = req.body.capacity
        await car.save()
        res.send('Car edited successfully')
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.post("/deletecar", async (req, res) => {
    try {
        const car = await Car.findOneAndDelete({ _id: req.body.carid })
        res.send('Car deleted successfully')

    } catch(err) {
        return res.status(400).json(err);
    }
});


router.get('/getallcars', async (req, res) => {
    try {
        const cars = await Car.find()
        res.send(cars)
    } catch (err) {
        return res.status(400).json(err);
    }
});

export default router;