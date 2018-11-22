import 'cross-fetch/polyfill';
import ApolloBoost, { gql } from 'apollo-boost';
import prisma from '../src/prisma';

const client = new ApolloBoost({
  uri: 'http://192.168.1.9:4466'
});

test('Should create a new user', async () => {
  const createUser = gql`
    mutation {
      createUser(
        data: {
          name: "Andrew",
          email: "andrew@example.com",
          password: "MyPass123"
        }
      ) {
        token,
        user {
          id
        }
      }
    }
  `;

  const response = await client.mutate({
    mutation: createUser
  });

  const exists = await prisma.exists.User({
    id: response.data.createUser.user.id
  });

  expect(exists).toBe(true);

});