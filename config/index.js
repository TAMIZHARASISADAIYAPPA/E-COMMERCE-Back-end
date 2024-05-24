require("dotenv").config();
var pg = require('pg')

const conString = `postgres:${process.env.DATABASE}//:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`;
const pool = new pg.Client(conString);
pool.connect().then(()=>console.log('DB Connected successfully'))
.catch(err=>console.log('Error connecting to postgres'));

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};

