import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Mutation = {
  async createUser(parent, args, { prisma }, info) {

    if (args.data.password.length < 8) { throw new Error('Password must be 8 characters or longer!');}

    const password = await bcrypt.hash(args.data.password, 10)

    const emailTaken = await prisma.exists.User({
      email: args.data.email
    });

    if (emailTaken) { throw new Error('Email taken!');}

    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password
      }
    });

    return {
      user,
      token: jwt.sign({userId: user.id}, 'thisisasecret')
    }
  },
  async deleteUser(parent, args, { prisma }, info) {

    const userExists = await prisma.exists.User({
      id: args.id
    });

    if (!userExists) { throw new Error('User not found!');}

    return prisma.mutation.deleteUser({
      where: {
        id: args.id
      }
    }, info);
  },
  async updateUser(parent, args, { prisma }, info) {
    return prisma.mutation.updateUser({
      where: {
        id: args.id
      },
      data: args.data
    }, info);
  },
  async createPost(parent, args, { prisma }, info) {
    return prisma.mutation.createPost({
      data: {
        title: args.data.title,
        body: args.data.body,
        published: args.data.published,
        author: {
          connect: {
            id: args.data.author
          }
        }
      }
    }, info );
  },
  async deletePost(parent, args, { prisma }, info){
    return prisma.mutation.deletePost({
      where: {
        id: args.id
      }
    }, info);
  },
  async updatePost(parent, args, { prisma }, info){
    return prisma.mutation.updatePost({
      where: {
        id: args.id
      },
      data: args.data
    }, info);
  },
  async createComment(parent, args, { prisma }, info) {
    return prisma.mutation.createComment({
      data: {
        text: args.data.text,
        author: {
          connect: {
            id: args.data.author
          }
        },
        post: {
          connect: {
            id: args.data.post
          }
        }
      }
    }, info);
  },
  async deleteComment(parent, args, { prisma }, info) {
    return prisma.mutation.deleteComment({
      where: {
        id: args.id
      }
    }, info);
  },
  async updateComment(parent, args, { prisma }, info) {
    return prisma.mutation.updateComment({
      where: {
        id: args.id
      }, 
      data: args.data
    }, info);
  }
}

export { Mutation as default };