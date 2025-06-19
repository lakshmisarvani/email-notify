MERN App with Email Notifications
A simple MERN stack application with email notifications for user registration and password reset.
Prerequisites

Node.js (v16 or later)
MongoDB Atlas or local MongoDB
Gmail account with App Password enabled

Setup Instructions
1. Backend Setup

Navigate to backend folder:cd backend


Install dependencies:npm install


Create a .env file in backend with:MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mernapp?retryWrites=true&w=majority
PORT=5000
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password


Replace <username>, <password> with MongoDB credentials.
Replace yourgmail@gmail.com and your-app-password with Gmail credentials.


Start the backend:npm start



2. Frontend Setup

Navigate to frontend/practiceapp folder:cd frontend/practiceapp


Install dependencies:npm install


Create a .env file in frontend/practiceapp with:REACT_APP_API_URL=http://localhost:5000/api


Start the frontend:npm start



3. Using the App

Open http://localhost:3000 in your browser.
Register with an email and password (check your email for a welcome message).
Log in with your credentials.
Use the "Forgot password?" link to request an OTP and reset your password.

Features

User registration with welcome email.
User login.
Password reset with OTP sent via email.

Notes

Ensure Gmail App Password is correctly set up.
MongoDB Atlas may require allowing your IP address in network settings.
This is a basic example for learning; enhance security for production use.

