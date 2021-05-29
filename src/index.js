const { ApolloServer } = require("apollo-server");
const typeDefs = require("./apollo/schema");
const resolvers = require("./apollo/resolvers");
const connectDB = require('../config/db')
connectDB()

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`GraphQL server running at: ${url}`);
});
