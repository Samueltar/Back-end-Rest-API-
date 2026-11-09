# 🚀 My First Backend REST API & Dashboard

A zero-dependency, full-stack RESTful Task Manager application built from scratch using pure **JavaScript (Node.js)** with persistent file storage and an interactive web dashboard.

---

## 🌟 Key Features

* **Built from Scratch:** Pure Node.js using built-in `http`, `fs`, and `path` modules (no external frameworks or dependencies needed).
* **RESTful API Architecture:**
  * `GET /` &mdash; Serves the visual web frontend dashboard.
  * `GET /api/tasks` &mdash; Retrieves all tasks as JSON.
  * `POST /api/tasks` &mdash; Adds a new task with auto-generated timestamp ID and saves it to disk (`201 Created`).
  * `DELETE /api/tasks/:id` &mdash; Deletes a specific task by ID and updates storage.
* **Data Persistence:** Automatically reads and writes tasks to a JSON database file (`data/tasks.json`).
* **Live Network Inspector:** Visual frontend displays raw HTTP request methods, headers, status codes, and payloads in real time.

---

## 📂 Project Structure

```text
backend/
├── data/
│   └── tasks.json      # Persistent JSON file database
├── public/
│   └── index.html      # Visual dashboard & live HTTP inspector
├── server.js           # Core HTTP server and API routing logic
├── package.json        # Project metadata and start script
└── .gitignore          # Git ignore rules
```

---

## 🚀 How to Run Locally

1. **Clone this repository:**
   ```bash
   git clone <YOUR-GITHUB-REPO-URL>
   cd backend
   ```

2. **Start the backend server:**
   ```bash
   node server.js
   ```

3. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## 🧠 Technologies Learned & Applied

* **JavaScript (ES6+)**
* **Node.js Runtime**
* **HTTP Protocol:** Methods (`GET`, `POST`, `DELETE`), Status Codes (`200`, `201`, `404`), Headers, MIME types
* **File System Operations (I/O):** Synchronous file reading/writing for data persistence
* **REST API Design & Routing**
* **Frontend-to-Backend Integration:** `fetch()` API and DOM manipulation
