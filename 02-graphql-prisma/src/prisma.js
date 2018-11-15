import { Prisma } from 'prisma-binding';

const prisma = new Prisma({ 
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://192.168.1.9:4466'
});

// prisma.query.users(null, '{ id name email posts { id title }}').then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// });


// prisma.query.comments(null, '{ id text author { id name }}').then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation.createPost({
//   data: {
//     title: "My new GraphQL post is live!",
//     body: "You can find the new course here",
//     published: true,
//     author: {
//       connect: {
//         id: "cjoiptotu000t0a76ld1oaz0p"
//       }
//     }
//   }
// }, '{ id title body published }').then((data) => {
//     console.log(data);
//     return prisma.query.users(null, '{ id name posts { id title}}').then((data) => {
//         console.log(JSON.stringify(data, undefined, 2));
//     });
// });


prisma.mutation.updatePost({
  where: {
    id: "cjoiurvfw001z0a76734hj48m"
  },
  data: {
    body: "This is how to get started with Graphql...",
    published: true
  }
}, '{ id title body published}').then((data) => {
  
  return prisma.query.posts(null, '{ id title body published }').then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    });
});