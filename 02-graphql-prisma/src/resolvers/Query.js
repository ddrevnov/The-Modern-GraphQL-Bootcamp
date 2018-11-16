const Query = {
  users(parent, args, { prisma }, info) {
    // if (!args.query) {
    //   return db.users;
    // }

    // return db.users.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase());
    // });

    return prisma.query.users(null, info);

  },
  posts(parent, args, { prisma }, info){
    // if (!args.query) {
    //   return db.posts;
    // }

    // return db.posts.filter((post) => {
    //   const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
    //   const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
    //   return isTitleMatch || isBodyMatch;
    // });

    return prisma.query.posts(null, info);
  },
  comments(parent, args, { db }, info){
    return db.comments;
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

export { Query as default };