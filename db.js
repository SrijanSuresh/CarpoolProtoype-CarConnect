const { pool } = require ('pg')
const pool = new Pool({
    host: 'db',
    port: '5432',
    user: 'currentUser',
    password: '12345',
    database: 'db123'
})

module.exports = pool