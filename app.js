const express = require('express');
const app = express();
const mongodb = require('./config/db');
const port = process.env.PORT || 5000;

//connect database
mongodb();

app.get('/', (req, res) => {
  res.send('welcome to home');
});

//setup bodyPatrser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/contacts', require('./routes/api/contacts'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, () => console.log(`server is up on ${port}`));
