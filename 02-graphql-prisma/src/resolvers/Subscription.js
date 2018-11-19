import getUserId from '../utils/getUserId';

const Subscription = {
  comment: {
    async subscribe(parent, { postId }, { prisma }, info) {
      return prisma.subscription.comment({
        where: {
          node: {
            post: {
              id: postId
            }
          }
        }
      }, info);
    }
  },
  post: {
    async subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.post({
        where: {
          node: {
            published: true
          }
        }
      }, info);
    }
  },
  myPost: {
    subscribe(parent, args, { prisma, request }, info) {
      const userId = getUserId(request);

      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId
            }
          }
        }
      }, info)
    }
  }
};

export { Subscription as default };