import database.csv

const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 1245;

function requestListener(req, res) {
  res.setHeader('Content-Type", "text/plain');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      // Read the database.csv file asynchronously
      const databasePath = path.join(__dirname, 'database.csv');
      fs.readFile(databasePath, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Cannot load the database');
          return;
        }

        let response = 'This is the list of our students\n';
        const lines = data.split('\n').filter(line => line.trim() !== '');  // Remove empty lines
        const studentsCS = [];
        const studentsSWE = [];

        for (let i = 1; i < lines.length; i++) {  // Skip the first line (header)
          const parts = lines[i].split(',');
          if (parts.length >= 4) {  // Ensure the row has enough columns
            const firstName = parts[0];
            const field = parts[3];
            if (field === 'CS') {
              studentsCS.push(firstName);
            } else if (field === 'SWE') {
              studentsSWE.push(firstName);
            }
          }
        }

        // Generate the response string
        response += `Number of students: ${studentsCS.length + studentsSWE.length}\n`;
        response += `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}\n`;
        response += `Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`;

        res.writeHead(200);
        res.end(response);
      });
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({error: 'Resource not found'}));
  }
};

const app = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

