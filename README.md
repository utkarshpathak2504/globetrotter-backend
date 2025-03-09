# Backend - Globetrotter

Welcome to the **Globetrotter** backend project! This API powers the Globetrotter app by handling the business logic, user management, destination data, and quiz functionalities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Starting the Server](#starting-the-server)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Quiz Endpoints](#quiz-endpoints)
  - [Destination Endpoints](#destination-endpoints)
- [Folder Structure](#folder-structure)


##Tech Stack
- Express
- MongoDB
- Node.js

## API-endpoints
https://docs.google.com/spreadsheets/d/1c7Gpvp1mgePx067ZQi1TT8s6J-z0_6yHEIHHyMMX0XY/edit?usp=sharing

## Prerequisites

Before you begin, ensure that you have the following software installed:

- **Node.js** (v16.x or later) - You can download it from [here](https://nodejs.org/).
- **npm** (comes with Node.js) or **yarn** (optional)
- **MongoDB** (Local or Cloud) for database storage
- **Postman** or similar API testing tool (for testing the API)

## Installation

Follow these steps to set up the backend project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/globetrotter-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd globetrotter-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    Or, if you are using Yarn:

    ```bash
    yarn install
    ```

4. Configure environment variables:

    Create a `.env` file in the root of the project and configure the following variables:

    ```
    MONGO_URI=mongodb://localhost:27017/globetrotter
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    PORT=5000
    ```

    Replace `mongodb://localhost:27017/globetrotter` with your MongoDB connection string if you are using a cloud database.

## Starting the Server

To start the server, run:

```bash
npm run dev


