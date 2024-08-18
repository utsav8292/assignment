const Card = require("../models/user");

const create= async (req, res) => {
  const { title, description, link } = req.body;

  // Validate input
  if (!title || !description) {
    return res.status(400).send({ message: 'Title and description are required' });
  }

  try {
    const newCard = new Card({ title, description, link });
    const savedCard = await newCard.save();
    res.status(201).send(savedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
};

const getCard= async (req, res) => {
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
};

// Get a specific card (GET /cards/:title)
const getCardById= async (req, res) => {
  const title = req.params.title;

  try {
    const card = await Card.findOne({ title:title });
    if (!card) {
      return res.status(404).send({ message: "Card not found" });
    }
    res.send(card);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = { create, getCardById, getCard };