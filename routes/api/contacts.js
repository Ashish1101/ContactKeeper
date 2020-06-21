const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Contact = require('../../models/Contact');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//get All user Contact
//private

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

//create contacts
//ptivate

router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Email is required').not().isEmpty().isEmail(),
      check('phone', 'Number is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, address, phone, type } = req.body;

    try {
      const contact = new Contact({
        name,
        email,
        address,
        phone,
        type,
        user: req.user.id,
      });

      await contact.save();

      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
