const bcrypt = require('bcrypt');

const password = 'Patrick@24'; // your plain password here

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
