const mongoose = require('mongoose');
//Mongodg authentication string obtained from website VSC section. 
const dbURL = 'mongodb+srv://neilbenjamin:GuitarGod69@cardatabase.oz5suw9.mongodb.net/';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'cardatabase', // Connect to the cardatabase.
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Could not connect to the database:', error);
  process.exit(1);
});

db.once('open', () => {
  console.log('Successfully connected to the database');
});

module.exports = db; // Export the database connection
