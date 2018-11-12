import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
  type Query {
    greetings(name: String!): String!
    add(numbers: [Float!]!): Float!
    grades: [Int!]! 
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    greetings(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}!`
      } else {
        return 'Hello!'
      }
    },
    add(parent, args, ctx, info) {
      if(args.numbers.length === 0) {
        return 0;
      }

      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },
    grades(parent, args, ctx, info) { 
      return [99, 70, 55];
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
        age: 28
      }
    },
    post() {
      return {
        id: '092',
        title: 'GraphQL 101',
        body: '',
        published: false
      }
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up!');
});