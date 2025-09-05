require('dotenv')
const { MongoClient } = require('mongodb');

let db;

// Uri - The connection string to the database
const uri = process.env.URI;

/* 
    startConnection is the function that make a connection to the database.

    If there's already a database running, then make a callback since the connection is still running.
    If not, then connect to the MongoClient and stores the database connection to the db varible.
*/
async function startConnection(callback) {
    try {

        if (db) {
            return callback(null, db);
        }

        MongoClient.connect(uri).then((client) => {
            db = client.db();
            callback(null, db);
        }).catch((error) => {
            console.error('Error connecting to database: ' + db, error);
            callback(error);
        })

    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

/* 
    provides a way to access a database instance. 
    It first checks if the db variable has a value.
    If there is value, then it returns the db instances.
    If not, it throws an error.
*/
function getDb() {
    if (!db) {
        throw Error('Database not initialized');
    }
    return db;
}

module.exports = { startConnection, getDb };