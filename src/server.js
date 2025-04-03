// src/server.js
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./graphql/schemas/fireRiskDataSchema');
const resolvers = require('./graphql/resolvers/fireRiskDataResolver');

async function startApolloServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: process.env.NODE_ENV !== 'production',
        introspection: true
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startApolloServer();