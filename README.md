# 🎬 Doomsday Ready

A full-stack movie management and cinema booking application built with React, TypeScript, Node.js, Express, and MongoDB.

**Live Demo (Frontend):** https://doomsday-ready-361l.vercel.app/


## 🤖 AI Usage Disclosure

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


  ## 🔗 API Endpoints

All endpoints are served under the `/api` prefix.

**Base URL (local):** `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/movies` | Create a movie |
| GET | `/api/movies` | Get all movies |
| PATCH | `/api/movies/:id` | Update a movie (watched, prerequisites) |
| GET | `/api/movies/:id/rewatch-order` | Get the rewatch order for a movie |
| POST | `/api/cinemas` | Create a cinema |
| GET | `/api/cinemas` | Get all cinemas |
| GET | `/api/cinemas/:id/booking?groupSize=6` | Get the minimum bundle booking quote |

**Full URLs:**
- Movies: `http://localhost:5000/api/movies`
- Cinemas: `http://localhost:5000/api/cinemas`

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


## 📝 Assumptions

- Movie titles and cinema names must be unique. Duplicate entries return `409`.
- A movie cannot depend on itself directly or indirectly. Such requests return `409 CIRCULAR_DEPENDENCY`.
- Release year must be a positive integer (minimum 1).
- Cinema bundle sizes must be unique, between 1 and 10 sizes, with each size ranging from 1 to 500.


## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/mominulislamsharon/Doomsday-Ready.git
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
VITE_API_URL=http://localhost:5000
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
