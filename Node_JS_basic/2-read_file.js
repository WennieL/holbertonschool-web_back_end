const fs = require('fs');

module.exports = function countStudents(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const columns = row.split(',');

      if (columns.length >= 4) {
        const firstName = columns[0];
        const field = columns[3];

        if (field === 'CS') {
          studentsCS.push(firstName);
        } else if (field === 'SWE') {
          studentsSWE.push(firstName);
        }
      }
    }

    console.log(`Number of students: ${studentsCS.length + studentsSWE.length}`);
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
