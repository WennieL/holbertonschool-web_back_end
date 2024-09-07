const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    res.setHeader('Content-Type', 'text/plain');

    // Asynchronously read the file
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Cannot load the database');
      } else {
        let response = 'This is the list of our students\n';
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const studentsCS = [];
        const studentsSWE = [];

        for (let i = 1; i < lines.length; i++) {
          const parts = lines[i].split(',');
          if (parts.length >= 4) {
            const firstName = parts[0];
            const field = parts[3];
            if (field === 'CS') {
              studentsCS.push(firstName);
            } else if (field === 'SWE') {
              studentsSWE.push(firstName);
            }
          }
        }

        response += `Number of students: ${studentsCS.length + studentsSWE.length}\n`;
        response += `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}\n`;
        response += `Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`;
        res.writeHead(200);
        res.end(response);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
