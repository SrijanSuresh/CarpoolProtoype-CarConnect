const pg = require('pg');

// Create a new client instance with connection details
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Srijan04',
  port: 5432,
  connectTimeoutMillis: 5000 // Adjust timeout value as needed
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
    return;
  }
  console.log('Connected to PostgreSQL database');

  // Execute the query
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Query result:', result.rows);
    }

    // Close the database connection
    db.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err);
      } else {
        console.log('Database connection closed');
      }
    });
  });
});
