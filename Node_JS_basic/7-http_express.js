const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.status(200);
  res.send('This is the list of our students');

  try {
    const data = await fs.readFile(database, 'utf8');
    const rows = data.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const columns = row.split(',');

      if (columns[3] === 'CS') {
        studentsCS.push(columns[0]);
      }

      if (columns[3] === 'SWE') {
        studentsSWE.push(columns[0]);
      }
    }

    res.write(`Number of students: ${studentsCS.length + studentsSWE.length}\n`);
    res.write(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}\n`);
    res.end(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
  } catch (e) {
    res.end('Error - Cannot load the file!');
  }
});

app.listen(1245, () => {
  console.log('Server is running on 1245');
});

module.exports = app;
