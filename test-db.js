import client from './db.js';

async function testConnection() {
  try {
    // Test a simple query
    const res = await client.query('SELECT NOW() AS current_time');
    console.log('Database response:', res.rows);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    // Disconnect from the database
    await client.end();
    console.log('Database connection closed.');
  }
}

testConnection();
