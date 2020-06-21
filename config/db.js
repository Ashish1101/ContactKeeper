const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const mongoDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database is connected');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = mongoDB;
