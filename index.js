import express from "express";
import connectDB from "./db.js";
import carsRoute from "./routes/carsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import bookingsRoutes from "./routes/bookingsRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

connectDB();

app.use('/api/cars' , carsRoute);
app.use('/api/users' , usersRoutes);
app.use('/api' , bookingsRoutes);

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is being hosted on localhost:${PORT}`);
})
