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
  
    // Create readline interface for user input
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    // Prompt user for input
    rl.question('Enter username: ', (username) => {
      rl.question('Enter email: ', (email) => {
        // Execute the insert query
        const query = 'INSERT INTO users (username, email) VALUES ($1, $2)';
        const values = [username, email];
  
        db.query(query, values, (err, result) => {
          if (err) {
            console.error('Error executing query:', err);
          } else {
            console.log('User added successfully');
          }
  
          // Close the readline interface
          rl.close();
  
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
  });
  