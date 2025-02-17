
# Workout Tracker Web Application

## Project Summary

This is a **Workout Tracker** web application designed to allow users to track and manage their exercises, including adding new exercises, editing existing ones, and deleting exercises from their log. The application features a simple front-end built with **React.js** and a back-end built with **Express.js** and **MongoDB** for data storage. The application uses **Passport.js** for GitHub authentication, enabling users to log in through their GitHub accounts.

## Features

- **Exercise Log**: Users can add exercises with a name, type (Cardio or Strength), and duration (in minutes).
- **CRUD Operations**: Users can edit and delete exercises.
- **GitHub Authentication**: Implemented GitHub authentication using Passport.js to allow users to log in with their GitHub account.
- **Session Management**: Sessions are managed using **express-session** to store user login state.

## Changes Made to Assignment #3

- **Backend Setup**: 
    - Set up **Express.js** with **MongoDB** integration for data storage and management of exercises.
    - Configured **Passport.js** with **GitHub OAuth** strategy to handle user authentication via GitHub accounts.
    - Added **express-session** for session management and user state persistence across requests.

- **Frontend Setup**: 
    - Created a simple user interface using **React.js** where users can add, edit, and delete exercises from their workout log.
    - Implemented a login button for GitHub authentication that redirects users to GitHub for authentication.
    - Designed a basic exercise log table to display added exercises.

- **GitHub Authentication**:
    - Integrated Passport.js to handle authentication with **GitHub**. When users click the "Login with GitHub" button, they are redirected to GitHub for login.
    - Upon successful login, the user is redirected back to the main application page.

## Current Issue: GitHub Authentication

The GitHub authentication process is not working as expected. Specifically, after clicking the "Login with GitHub" button, the user is not properly redirected back to the application after successful authentication.

### Potential Reasons:

1. **CORS Issues**: There could be issues related to CORS (Cross-Origin Resource Sharing) between the frontend (`localhost:3000`) and the backend (`localhost:5001`). This could be preventing the redirect from completing successfully.

2. **Callback URL Misconfiguration**: The callback URL (`http://localhost:5001/auth/github/callback`) in the GitHub OAuth application might not match the URL expected by the Passport.js middleware in the backend.

3. **Session Handling**: Sessions might not be set up properly to persist the user login state, causing the redirect to fail or the user not being logged in after authentication.

4. **GitHub App Permissions**: The GitHub app might not have the necessary permissions to access user details, such as email, which could be causing the authentication flow to break.

### Next Steps to Fix GitHub Authentication:

- Verify that the **callback URL** matches the one configured in the GitHub OAuth application.
- Ensure that **CORS** is configured properly in the backend to allow requests from the frontend.
- Debug the login flow using **console logs** in both the frontend and backend to trace where the flow breaks.
- Ensure **express-session** is configured correctly to persist user sessions.
  
## Installation

1. **Clone the Repository**:
  
   git clone https://github.com/your-username/workout-tracker.git
   cd workout-tracker


2. **Install Backend Dependencies**:

   cd backend
   npm install


3. **Set up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following variables:

   MONGO_URI=your_mongo_connection_string
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   JWT_SECRET=your_jwt_secret
   

4. **Run the Backend**:
  
   npm start


5. **Install Frontend Dependencies**:

   cd frontend
   npm install


6. **Run the Frontend**:
   npm start
   

The application should now be accessible at [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:5001](http://localhost:5001) for the backend.

## Notes

- This project is still in development, and GitHub authentication is currently the primary issue to resolve.
- Partial credit will be given based on the completion of the backend, frontend, and the attempted GitHub authentication integration.


### Key Highlights in the README:
- **Project Summary**: Provides a brief overview of what the application does and its technologies.
- **Changes Made**: Lists the key changes made to the original assignment and features added.
- **GitHub Authentication Issue**: Describes the issue with GitHub login, likely related to configuration, and suggestions for next steps.
- **Installation Instructions**: Provides clear steps for setting up both the backend and frontend for local development.

