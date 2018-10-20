const 
    express = require('express'),
    app = express(),
    expressGraphQL = require('express-graphql'),
    schema = require('./schema/schema'),
    PORT = 4000;

// Express configurations.

// Express middleware.
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true // Development tool that allows us to make quiries against our dev server.
}));

// Express routes.

app.listen(PORT, err => {
    console.log(err || `Listening on port ${PORT}`);
});