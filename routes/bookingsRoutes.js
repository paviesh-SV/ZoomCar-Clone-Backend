import express from 'express';
import Stripe from 'stripe';
import Booking from '../models/bookingModel.js';
import Car from '../models/carModel.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

// Create a Checkout Session
router.post('/create-checkout-session', async (req, res) => {
    try {
        const { car, totalHours, totalAmount, driverRequired, bookedTimeSlots } = req.body;
        const carDetails = await Car.findById(car);

        if (!carDetails) {
            return res.status(404).json({ error: 'Car not found' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: carDetails.name,
                            images: [carDetails.image],
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ id: session.id });

        if(session){
            req.body.transactionId = session.id;
            const newbooking = new Booking (req.body);
            await newbooking.save();
            const car = await Car.findOne({_id: req.body.car});
            console.log(req.body.car[0].name);
            car.bookedTimeSlots.push(req.body.bookedTimeSlots);
            await car.save();
            
        }else{
            res.status(400).json(error);
            console.log(error);
        }
    
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/getallbookings",async(req, res) => {

    try { 
        const bookings = await Booking.find().populate('car')
        res.send(bookings)

    } catch (error) {
        return res.status(400).json(error);    
    }

});


export default router;
