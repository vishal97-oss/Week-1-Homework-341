// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://vai19004:Hello@0915@cluster0.ndcryky.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToMongoDB() {
//     const uri = "mongodb+srv://vai19004:Hello@0915@cluster0.ndcryky.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//   try {
//     await client.connect();

//     await listDatabases(client);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
//     finally {
//         await client.close();
//     }
//   }

// async function listDatabases(client ){
//     const databases = await client.db().admin().listDatabases();
//     console.log("Databases:")
//     databasesList.databases.forEach(db => {
//         console.log(`-${db.name}`);
//     });
// }

// module.exports = {
//   connectToMongoDB
// };


const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};













// Video example
// // connectToMongoDB();

// // const mongoose = require('mongoose');

// // const uri2 = "mongodb+srv://vai19004:Hello@0915@cluster0.ndcryky.mongodb.net/?retryWrites=true&w=majority"; 

// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB');
// // });

// // const express = require('express');
// // const app = express();
// // const port = 4000;

// // const yourData = [
// //   { id: 1, name: 'contacts1' },
// //   { id: 2, name: 'contacts2' },
// //   { id: 2, name: 'contacts3' },
// // ];

// // // Define a route to handle the GET request and return all data
// // app.get('/api/data', (req, res) => {
// //   res.json(contacts.json); // Sending the data as JSON
// // });

// // // Start the Express server
// // app.listen(port, () => {
// //   console.log(`Server is running on http://localhost:${port}`);
// // });
