const mongodb = require('../mongodb/connection');

async function getData() {
    try {
        const db = await mongodb.getDb();
        const contacts = await db.collection('contacts').find({}).toArray();

        return contacts;
    } catch (error) {
        console.error('Error fetching contacts in contactsModel: ', error);
        throw new Error("Internal Server Error");
    };
};

module.exports = { getData };