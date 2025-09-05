const contactsModel = require('../models/contactsModel')
const objectId = require('mongodb').ObjectId;
const getDataFunctions = {};

/* 
    Get all cantacts in the database and converts it to JSON
*/
getDataFunctions.getContacts = async (req, res) => {
    try {
        const data = await contactsModel.getData();
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    } catch (error) {
        console.error('Failed to fetch data: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/* 
    Get all cantacts in the database.
    After getting the contacts it counts the amount of the contacts
    and then randomize which contact to display.
*/
getDataFunctions.getSingleContact = async (req, res) => {
    try {
        const contactId = new objectId(req.params.id);
        const data = await contactsModel.getData(contactId);

        res.setHeader('Content-Type', 'application/json');
        res.json(data[0]);
    } catch (error) {
        console.error('Failed to fetch data: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = getDataFunctions;

/* A function for the random fun
getDataFunctions.getSingleContact = async (req, res) => {
    try {
        const data = await contactsModel.getData();

        const dataAmount = data.length;
        // Away to randomly display a contact in an array just for fun.
        const number = Math.floor(Math.random() * (dataAmount - 0)) + 0;

        res.setHeader('Content-Type', 'application/json');
        res.json(data[number]);
    } catch (error) {
        console.error('Failed to fetch data: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

*/