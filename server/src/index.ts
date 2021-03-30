import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { createConnection } from "typeorm";
import * as path from 'path'
import { resolvers } from './resolvers/resolvers'
console.log("here we are");

// let something: any = User()

// something.sayHello()

const app = express();

const typeDefs = importSchema(path.join(__dirname, 'schema/schema.graphql'))



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// const connectionOptions = {
//   port: process.env.PORT || 8080 ,
//   endpoint: '/graphql',
//   subscriptions: '/subscriptions',
//   playground: '/playground',
// }

// The `listen` method launches a web server.
// server.listen(connectionOptions).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });


//Typeorm connection
createConnection().then(() => {

  //Launches Express server, to which Apollo is integrated
  app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )

})