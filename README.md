# 📝 MERN Blog Application

## Overview

This project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application. It demonstrates seamless integration between front-end and back-end components, including database operations, API communication, authentication, image uploads, pagination, searching/filtering, and comments.

---

## 📂 Directory Structure
mern-blog/ ├── client/ # React front-end (Vite) │ ├── src/ │ │ ├── components/ │ │ ├── context/ │ │ ├── hooks/ │ │ ├── services/ │ │ └── App.jsx │ ├── public/ │ ├── vite.config.js │ └── package.json ├── server/ # Express.js back-end │ ├── controllers/ │ ├── middleware/ │ ├── models/ │ ├── routes/ │ ├── server.js │ └── package.json ├── .env.example └──
---

## 🚀 Features

- **CRUD for Blog Posts and Categories**
- **User Authentication** (registration, login, protected routes)
- **Image Uploads** for blog post featured images
- **Pagination** for post list
- **Searching and Filtering** for posts
- **Comments** on blog posts
- **Responsive UI** with React Router and Context API
- **Optimistic UI updates** and error/loading handling

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18+)
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mern-blog