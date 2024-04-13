const pg = require('pg');
const prompt = require('prompt');

// Create a new client instance with connection details
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Srijan04',
  port: 5432,
  connectTimeoutMillis: 5000 // Adjust timeout value as needed
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
      return;
    }
    console.log('Connected to PostgreSQL database');
  
    // Prompt user for input
    prompt.start();
    prompt.get(['username', 'email'], (err, result) => {
      if (err) {
        console.error('Error getting user input:', err);
        return;
      }
  
      // Execute the insert query
      const query = 'INSERT INTO users (username, email) VALUES ($1, $2)';
      const values = [result.username, result.email];
  
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
        } else {
          console.log('User added successfully');
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
  });
  