const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'database-1.cd5znruo4omg.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password',
    database: 'database-1',
});


db.connect((err) => {
  if (err) {
    console.log(err.message);
    return ;
  }
  console.log('Connected to the MySQL server.');
});