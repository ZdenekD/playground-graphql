const express = require('express');
const graphql = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use('/graphql', graphql({schema, graphiql: true}));
app.use('/', (req, res) => {
    res.send('Helloworld');
});
