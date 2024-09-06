process.stdout.write('Welcome to Holberton School, what is your name?\r\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\r\n`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing\r\n');
});