const express = require('express');
const path = require('path');
// Apollo server connect
const {ApolloServer} = require('apollo-server-express');
// Require Schemas
const {typeDefs, resolvers} = require('./Schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;
// new ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  constex: authMiddleware
});

// server
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// Server up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
