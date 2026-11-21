# 🎬 Doomsday Ready

A full-stack movie management and cinema booking application built with React, TypeScript, Node.js, Express, and MongoDB.

**## 🤖 AI Usage Disclosure**

**AI assistance was used in the following parts of this project:**

- **Backend – Rewatch Plan:** Took AI guidance to understand the prerequisite movie ordering logic.
- **Backend – Booking:** Used AI assistance for the group size-based minimum bundle calculation.

## ✨ Features

### 🎥 Movie Management
- Add and view movies.
- Search and filter movies.
- Mark movies as watched or unwatched.
- Manage movie prerequisites.

### 🔄 Rewatch Plan
- Get movies in the correct prerequisite order.
- Track watched progress.
- Calculate remaining runtime.

### 🎟️ Cinema Booking
- Add and view cinemas.
- Calculate the minimum seat bundle combination for a group.
- Show whether an exact booking is possible.

### 📱 User Interface
- Responsive design.
- Modern dark-themed interface.
- Simple and interactive navigation.

## 🛠️ Technology Stack

### Frontend
- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Axios
- Tailwind CSS 4
- Base UI
- Lucide React

### Backend
- Node.js
- Express 5
- TypeScript
- MongoDB
- Mongoose
- Zod
- CORS
- dotenv

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd Doomsday-Ready
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
DATABASE_URL=your_mongodb_connection_string
```

Start the backend development server:

```bash
npm run dev
```

Backend will run at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

## 📌 Future Improvements

- Add user authentication and authorization.
- Add automated unit and integration tests.
- Improve movie and cinema management features.

---

**Developed as part of the Blinto Talent Accelerator 2027 assessment.**
