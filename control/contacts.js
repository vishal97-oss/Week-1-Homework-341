const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db("wee2").collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("wee2")
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async(req,res) =>{
    const contact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      cellphone: req.body.cellphone,
      occupation: req.body.occupation,
      countrynationality: req.body.countrynationality,
      email: req.body.countrynationality,
    };

    const response = await mongodb.getDb().db('wee2').collection('contacts').insertOne(contact);
    
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}


const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    cellphone: req.body.cellphone,
    occupation: req.body.occupation,
    countrynationality: req.body.countrynationality,
    email: req.body.countrynationality,
  };
  const response = await mongodb
    .getDb()
    .db('wee2')
    .collection('contacts')
    .updateOne({ _id: userId }, {$set: req.body});  //.replaceOne replace entire thing or contact alone without $set: replace entire thing///// Now req.body is an object created and when we pass it it only take mentioned feilds to update. 
  console.log(response);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error to update.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('wee2').collection('contacts').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };
