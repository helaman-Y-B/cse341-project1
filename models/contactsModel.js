const mongodb = require('../mongodb/connection');

/* 
    Get all cantacts in the database and send it to the controller that called it.
*/
async function getData(contactId) {
    try {
        const db = await mongodb.getDb();

        if (contactId !== undefined) {
            const contact = await db.collection('contacts').find({ _id: contactId }).toArray();
            return contact;
        } else {
            const contacts = await db.collection('contacts').find({}).toArray();

            return contacts;
        };
    } catch (error) {
        console.error('Error fetching contacts in contactsModel: ', error);
        throw new Error("Internal Server Error");
    };
};

module.exports = { getData };