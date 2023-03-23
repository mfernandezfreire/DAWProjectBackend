// eslint-disable-next-line import/no-extraneous-dependencies
import * as mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  connection.query('CREATE DATABASE mydb', (e) => {
    if (e) throw e;
    console.log('Database created');
  });
});
