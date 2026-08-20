# ⚔️ CodeBet

### Real-Time 1v1 Competitive Programming Platform

CodeBet is a full-stack MERN application that brings the thrill of competitive programming into a **1v1 challenge format**.

Inspired by platforms like **Codeforces, CodeChef, and chess.com**, CodeBet lets programmers challenge each other, solve problems in real time, and experience the pressure of live contests — together.

---

## 🚀 Features

* ⚔️ **1v1 Coding Challenges**

  * Challenge another programmer to a coding battle.
  * Compete head-to-head under time pressure.

* 💻 **Online Code Editor**

  * Write and submit code directly from the browser.
  * Practice competitive programming in a real-time environment.

* ⚡ **Real-Time Challenges**

  * Real-time communication powered by Socket.IO.
  * Challenge and contest events are synchronized between players.

* 🏆 **Competitive Programming**

  * Race against another programmer to solve coding problems.
  * Experience the pressure of a live coding contest.

* 🔐 **Authentication**

  * Secure user authentication.
  * JWT-based authentication and protected routes.

* 👤 **User Profiles**

  * Create and manage your coding profile.
  * Participate in coding challenges.

* 🗄️ **MongoDB Database**

  * User and application data stored using MongoDB.

* ☁️ **Cloudinary Integration**

  * Cloud-based media and image management.

* 📱 **Responsive UI**

  * Modern interface designed for different screen sizes.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Redux Toolkit
* Axios
* Tailwind CSS
* Socket.IO Client
* React Toastify
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* bcryptjs
* Axios
* Cloudinary
* Multer
* CORS
* dotenv

---

## 📁 Project Structure

```text
CodeBet/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* MongoDB or MongoDB Atlas

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Alok0423/CodeBet.git
cd CodeBet
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

> ⚠️ Never commit your `.env` file to GitHub. Keep API keys, database credentials, and secrets private.

---

## ▶️ Running the Application

### Start the Backend

From the `backend` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start the Frontend

From the `frontend` directory:

```bash
npm run dev
```

The frontend will usually run on:

```text
http://localhost:5173
```

---

## 🏗️ Application Architecture

```text
                    ┌─────────────────┐
                    │      User       │
                    │     Browser     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React + Vite    │
                    │    Frontend     │
                    └────────┬────────┘
                             │
                    REST API │ Socket.IO
                             │
                             ▼
                    ┌─────────────────┐
                    │ Node + Express  │
                    │     Backend     │
                    └───────┬─────────┘
                            │
                   ┌────────┴────────┐
                   ▼                 ▼
            ┌─────────────┐   ┌─────────────┐
            │   MongoDB   │   │  Cloudinary │
            │   Database  │   │    Media    │
            └─────────────┘   └─────────────┘
```

---

## 🌐 Deployment

CodeBet can be deployed using:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

Production architecture:

```text
User
 │
 ▼
Vercel
Frontend
 │
 │ API + Socket.IO
 ▼
Render
Backend
 │
 ▼
MongoDB Atlas
```

---

## 🔮 Future Improvements

* 🏆 Global leaderboard
* 📊 ELO/rating system
* 📜 Match history
* 🌎 More programming languages
* 🤝 Skill-based matchmaking
* 👥 Friends and online status
* 👀 Spectator mode
* 🏟️ Tournament mode
* 🛡️ Anti-cheating mechanisms
* 📈 Performance analytics

---

## 🎯 Vision

CodeBet aims to make competitive programming more engaging by combining:

**Coding + Competition + Real-Time Multiplayer**

Instead of solving problems alone, challenge another programmer and prove who can solve the problem faster.

---

## 👨‍💻 Author

**Alok Sharma**

GitHub:
https://github.com/Alok0423

---

## ⭐ Support

If you find CodeBet interesting, consider giving the repository a ⭐ on GitHub.

### Code. Challenge. Compete. Win. ⚔️
