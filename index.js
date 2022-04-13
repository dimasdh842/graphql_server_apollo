const mongoose = require("mongoose");

const typeDefs = require('./schema')
const resolvers = require('./resolver');
const { ApolloServer } = require("apollo-server");

mongoose.connect('mongodb://localhost:27017/bwa-gql',{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
})

const server = new ApolloServer({typeDefs,resolvers})

server.listen()
.then((url) => {
    console.log(`server ready at ${url.url}`);
})