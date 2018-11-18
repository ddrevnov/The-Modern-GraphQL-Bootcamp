import jwt from 'jsonwebtoken';

const getUserId = (request) => {
  const header = request.request.headers.authorization;

  if (!header) { throw new Error('Authentication required'); }

  const token = header.replace('Bearer ', '');
  const decode = jwt.verify(token, 'thisisasecret');

  return decode.userId;
}

export { getUserId as default };