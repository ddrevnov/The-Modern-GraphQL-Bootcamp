import { Prisma } from 'prisma-binding';

const prisma = new Prisma({ 
  typeDefs: 'src/generated/prisma.graphql',
  endpint: '192.168.1.9:4466'
});