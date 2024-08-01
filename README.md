# Zoom Car Clone - BackEnd

This repository contains the clone of zoom car (car rental application), using the mern fullstack web application. The frontend was made using, ReactJS, Bootstrap for styling and antd for some components in the frontend pages. The backend was made using NodeJS, mongoDB, mongoose, ExpressJS, JWT and Bcrypt for hashing password. This app some functionalities such as user authentication, car booking management, payment gateway(using stripe) and admin features which allows is to use the CRUD applications (create, read, update and delete) on car that can be rented.

## Project Features

- User authentication for secure access to the platform.
- Booking management system for efficient rental services.
- Admin dashboard with specialized features for company management.

## Project Structure

- `client`: Contains the React.js frontend of the project.
- `server`: Contains the Node.js and Express.js backend of the project.

## BackEnd Render Deployed URL ⌛

🔸[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://zoomcar-clone-backend-45xc.onrender.com)

## FrontEnd Deployed URL

🔸*Click on the Badge to Check out My Markdown Viewer Application Here*👉🏻 [![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://zoomcar-clone-psv.netlify.app/login)

## Technologies Used in FrontEnd and BackEnd 🛠️

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-007A88?style=for-the-badge&logo=dotenv&logoColor=white)
![cors](https://img.shields.io/badge/cors-1572B6?style=for-the-badge&logo=cors&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemailer&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

## Frontend github URL

URL: https://github.com/paviesh-SV/ZoomCar-Clone-Frontend.git

## Installation 🧑🏻‍💻

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/paviesh-SV/ZoomCar-Clone-Backend.git
   git clone https://github.com/paviesh-SV/ZoomCar-Clone-Frontend.git
   ```

2. **Navigate to the Project Directory**:

    open these two in 2 different windows of ide - (VsCode)

   ```bash
   cd zoomcar-clone-backend
   cd zoomcar-clone-frontend
   ```

3. **Install Dependencies for the Frontend**:

    after cd zoomcar-clone-frontend

   ```bash
   cd client
   npm install
   ```

4. **Install Dependencies for the Backend**:

   ```bash
   cd server
   npm install
   ```

5. **Set up Environment Variables**:

   - Create a `.env` file in the `server` directory.
   - Define the following variables:

     ```plaintext
     PORT=<your-port-number>
     MONGODB_URL=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     STRIPE_KEY=<your-secret-stripekey>
     ```


## Usage 🚀

1. **Start the Backend Server**:

   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Development Server**:

   ```bash
   cd client
   npm start
   ```

3. **Visit `http://localhost:<your-port>`** in your web browser to access the application.