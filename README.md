# 📄 Google Docs Clone

A **lightweight, real-time collaborative rich-text editor** built with **React (Vite)**, **Quill**, **Socket.IO**, **Node.js/Express**, and **MongoDB**. Supports real-time editing, autosave, and persistent documents.

---

## 🚀 Live Demo

Live app: [Access the Live Demo](https://google-docs-clone-zv83.onrender.com)

---

## 🎥 Demo Video


---

## 🧱 Tech Stack

- Frontend: React (Vite), Quill
- Realtime: Socket.IO
- Backend: Node.js, Express
- Database: MongoDB Atlas (M0 Free tier works)
- Build/Deploy: Render (Static Site for client, Web Service for server)

---

## ✨ Features

- Create & open documents via URL (UUID)
- Collaborative editing with Quill
- Realtime updates over WebSockets (Socket.IO)
- Autosave every few seconds
- Rich text formatting (headings, lists, bold/italic/underline, code blocks, images, alignment, colors)

---

## 🧱 Monorepo Structure

```
/client     # React + Vite app
/server     # Node.js + Express + Socket.IO API
```

---

## Prerequisites

- Node.js 18+
- Yarn
- MongoDB Atlas cluster (or local MongoDB)
- Render accounts for frontend and backend (optional but recommended)

---

## Environment Variables

### Server (`/server/.env`)

```
PORT=3001
MONGODB_URL=<your MongoDB connection string>
# Comma-separated list of allowed client origins (no spaces)
ALLOWED_ORIGINS=http://localhost:3000,https://google-docs-clone-zv83.onrender.com
```

### Client (`/client/.env`)

```
# Point this to your local or deployed server base URL
VITE_SERVER_URL=http://localhost:3001
# For production build on Render (example):
# VITE_SERVER_URL=https://<your-backend-on-render>.onrender.com
```

---

## Local Development

### 1) Install dependencies

```bash
# in /client
yarn

# in /server
yarn
```

### 2) Start backend

```bash
# in /server
yarn dev    # or: yarn start / node server.js (match your server script)
```

### 3) Start frontend

```bash
# in /client
yarn dev    # runs Vite on http://localhost:3000
```

Open `http://localhost:3000` and create/open a document route like:

```
/documents/26edcc24-3634-474c-948a-7f284cd1be20
```

---

## Deployment on Render (No render.yaml)

### A) Backend (Web Service)

1. Create a **Web Service** from the `/server` directory of your GitHub repo.
2. Environment:
   - Add `MONGODB_URL`
   - Add `ALLOWED_ORIGINS` exactly as:
     ```
     http://localhost:3000,https://google-docs-clone-zv83.onrender.com
     ```
3. Build command:
   ```
   yarn
   ```
4. Start command (match your server script):
   ```
   yarn start
   ```
   or
   ```
   node server.js
   ```
5. Note the backend URL (e.g. `https://your-server.onrender.com`).

### B) Frontend (Static Site)

1. Create a **Static Site** from the `/client` directory of your GitHub repo.
2. Environment (Static Site):
   - Add `VITE_SERVER_URL` and set it to your backend URL from step A (e.g. `https://your-server.onrender.com`).
3. Build command:
   ```
   yarn build
   ```
4. Publish directory:
   ```
   dist
   ```
5. **Redirects/Rewrites (SPA fix)**
   Add a rewrite so deep links like `/documents/<id>` work on refresh:
   - Source: `/*`
   - Destination: `/index.html`
   - Action: `Rewrite`

This prevents 404s when opening a document URL directly in a new tab.

---

## 📦 Future Improvements

- Presence indicators & live cursors
- Commenting / suggestions mode
- Version history & snapshots
- Authentication & sharing permissions
