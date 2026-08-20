# ⚔️ CodeBet

### Real-Time 1v1 Competitive Programming Platform

**CodeBet** is a full-stack MERN application that brings the excitement of competitive programming into a **real-time 1v1 battle format**.

Challenge another programmer, solve coding problems under pressure, and compete head-to-head in a live coding environment.

Inspired by platforms such as **Codeforces, CodeChef, and chess.com**, CodeBet combines competitive programming with real-time multiplayer interaction.

## 🌐 Live Demo

🚀 **Try CodeBet:**
https://codebet.vercel.app/

---

## ✨ Features

### ⚔️ 1v1 Coding Battles

Challenge another programmer and compete head-to-head to solve coding problems.

### 💻 Online Coding Environment

Write and submit solutions directly from the browser in a competitive programming environment.

### ⚡ Real-Time Interaction

Real-time communication enables players to experience live challenges and competitive matches.

### 🔐 Authentication

User authentication and protected application routes provide a personalized experience.

### 👤 User Profiles

Create a programming profile and participate in competitive coding challenges.

### 🏆 Competitive Experience

Solve problems under time pressure and compete to finish faster and more efficiently.

### 📱 Modern Responsive UI

A modern web interface designed for a smooth experience across devices.

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

## 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │        User          │
                         │      Browser         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React + Vite       │
                         │      Frontend        │
                         └──────────┬───────────┘
                                    │
                         REST API + Socket.IO
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Node.js + Express  │
                         │       Backend        │
                         └──────────┬───────────┘
                                    │
                       ┌────────────┴────────────┐
                       ▼                         ▼
              ┌────────────────┐       ┌────────────────┐
              │    MongoDB     │       │   Cloudinary   │
              │    Database    │       │     Storage    │
              └────────────────┘       └────────────────┘
```

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
│   ├── server.js
│   └── socket.js
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

## 🚀 Getting Started Locally

### Prerequisites

Make sure you have:

* Node.js
* npm
* Git
* MongoDB / MongoDB Atlas

### Clone the Repository

```bash
git clone https://github.com/Alok0423/CodeBet.git
cd CodeBet
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` directory.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Add any additional environment variables required by your local configuration.

### Run Backend

```bash
cd backend
npm run dev
```

### Run Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Then open the local URL provided by Vite.

---

## 🎯 How CodeBet Works

```text
Create Account
      ↓
Login
      ↓
Challenge Another Player
      ↓
Enter 1v1 Coding Match
      ↓
Solve the Problem
      ↓
Submit Solution
      ↓
Compete in Real Time
      ↓
Winner!
```

---

## 🔮 Future Improvements

* 🏆 Global leaderboard
* 📊 ELO / rating system
* 📜 Match history
* 🤝 Skill-based matchmaking
* 👥 Friends and online status
* 👀 Spectator mode
* 🏟️ Tournament mode
* 🌎 Multi-language support
* 🛡️ Anti-cheating mechanisms
* 📈 Coding performance analytics

---

## 💡 Vision

The goal of CodeBet is to make competitive programming more engaging by combining:

**Coding + Competition + Real-Time Multiplayer**

Instead of solving problems alone, challenge another programmer and prove who can solve them better and faster.

---

## 👨‍💻 Author

**Alok Sharma**

GitHub:
https://github.com/Alok0423

---

## 🌐 Live Project

**CodeBet:**
https://codebet.vercel.app/

---

## ⭐ Support

If you like the project, consider giving the repository a ⭐ on GitHub.

**Code. Challenge. Compete. Win. ⚔️**
