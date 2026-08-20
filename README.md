# ⚔️ CodeBet

### Real-Time 1v1 Competitive Programming Platform

**CodeBet** is a full-stack MERN application that brings the excitement of competitive programming into a **real-time 1v1 battle format**.

Inspired by platforms like **Codeforces, CodeChef, and chess.com**, CodeBet allows programmers to challenge each other, solve coding problems under time pressure, and compete in a live multiplayer environment.

---

## 🌐 Live Demo

### 🚀 Try CodeBet

**https://code-bet-green.vercel.app/**

### 🔧 Backend API

**https://codebet-7ykd.onrender.com**

---

## ✨ Features

### ⚔️ 1v1 Coding Battles

Challenge another programmer and compete head-to-head to solve coding problems.

### 💻 Online Coding Environment

Write, test, and submit your code directly from the browser.

### ⚡ Real-Time Multiplayer

Socket.IO enables real-time communication and synchronization between players during challenges.

### 🔐 Authentication

Secure user registration, login, authentication, and protected routes using JWT.

### 👤 User Profiles

Users can create their profiles and participate in coding challenges.

### 🏆 Competitive Programming

Solve problems under time pressure and compete against another programmer.

### 📊 Challenge Management

Send, accept, reject, withdraw, and manage coding challenges.

### 📱 Responsive Interface

Modern React-based interface designed for a smooth experience across different devices.

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

### Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 🏗️ Architecture

```text
                         🌍 USERS
                            │
                            ▼
              ┌──────────────────────────┐
              │      Vercel Frontend     │
              │  React + Vite + Tailwind │
              └────────────┬─────────────┘
                           │
                    REST API + Socket.IO
                           │
                           ▼
              ┌──────────────────────────┐
              │     Render Backend       │
              │   Node.js + Express      │
              │        + Socket.IO       │
              └────────────┬─────────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
             ┌────────────┐  ┌────────────┐
             │  MongoDB   │  │ Cloudinary │
             │   Atlas    │  │   Storage  │
             └────────────┘  └────────────┘
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

## 🚀 Run Locally

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* MongoDB / MongoDB Atlas

### Clone the Repository

```bash
git clone https://github.com/Alok0423/CodeBet.git
cd CodeBet
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:

```bash
npm run dev
```

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on the local Vite development server.

---

## 🔐 Environment Variables

Do not upload your `.env` file to GitHub.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Keep all credentials, API keys, database passwords, and secrets private.

---

## 🎯 How CodeBet Works

```text
Create Account
      ↓
Login
      ↓
Find / Challenge Player
      ↓
Send Challenge
      ↓
Opponent Accepts
      ↓
Start 1v1 Contest
      ↓
Solve Coding Problem
      ↓
Submit Solution
      ↓
Determine Winner
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
* 🌎 Support for multiple programming languages
* 🛡️ Anti-cheating mechanisms
* 📈 Coding performance analytics
* 🔔 Real-time notifications

---

## 🎯 Vision

CodeBet aims to make competitive programming more engaging by combining:

**Coding + Competition + Real-Time Multiplayer**

Instead of solving problems alone, challenge another programmer and prove who can solve the problem faster.

---

## 👨‍💻 Author

### Alok Sharma

GitHub:
https://github.com/Alok0423

Project Repository:
https://github.com/Alok0423/CodeBet

---

## 🌐 Links

| Platform             | Link                                |
| -------------------- | ----------------------------------- |
| 🚀 Live Application  | https://code-bet-green.vercel.app/  |
| 🔧 Backend           | https://codebet-7ykd.onrender.com   |
| 💻 GitHub Repository | https://github.com/Alok0423/CodeBet |

---

## ⭐ Support

If you like CodeBet, consider giving the repository a ⭐ on GitHub.

**Code. Challenge. Compete. Win. ⚔️**
