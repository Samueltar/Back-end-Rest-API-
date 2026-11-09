const http = require('http');
const fs = require('fs');
const path = require('path');

// The exact path to our database file
const DB_FILE = path.join(__dirname, 'data', 'tasks.json');
const HTML_FILE = path.join(__dirname, 'public', 'index.html');

function getTasks() {
  const data = fs.readFileSync(DB_FILE, 'utf-8');
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(DB_FILE, JSON.stringify(tasks, null, 2), 'utf-8');
}

const server = http.createServer((req, res) => {
  // ROUTE 1: Home page (Serve HTML Dashboard)
  if (req.method === 'GET' && req.url === '/') {
    const html = fs.readFileSync(HTML_FILE, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  // ROUTE 2: GET /api/tasks (Return JSON list)
  if (req.method === 'GET' && req.url === '/api/tasks') {
    const fileData = fs.readFileSync(DB_FILE, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(fileData);
    return;
  }

  // ROUTE 3: POST /api/tasks (Save new task)
  if (req.method === 'POST' && req.url === '/api/tasks') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const parsed = JSON.parse(body);
      const tasks = getTasks();

      const newTask = {
        id: Date.now(),
        title: parsed.title,
        completed: false
      };

      tasks.push(newTask);
      saveTasks(tasks);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newTask));
    });

    return;
  }

  // ROUTE 4: 404 Not Found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 page not found');
});

server.listen(3000, () => {
  console.log('API Server running at http://localhost:3000');
});
