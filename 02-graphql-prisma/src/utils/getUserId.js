import jwt from 'jsonwebtoken';

const getUserId = (request, requireAuth = true) => {
  const header = request.request.headers.authorization;

  if (header) { 
    const token = header.replace('Bearer ', '');
    const decode = jwt.verify(token, 'thisisasecret');
    return decode.userId;
  }

  if (requireAuth) {
    throw new Error('Authentication required'); 
  }

  return null;
}

export { getUserId as default };