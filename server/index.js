const express = require('express');
const colors = require('colors');
const schema = require('./schema/schema.js');
const connectDB = require('./config/db.js');
require('dotenv').configDotenv();
const cors = require('cors');


const { graphqlHTTP } = require('express-graphql');

const port = process.env.PORT || 5000;

const app = express();

//connecting to Database
connectDB();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port ${port}`));