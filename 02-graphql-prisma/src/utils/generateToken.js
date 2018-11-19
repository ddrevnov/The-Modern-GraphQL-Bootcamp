import jwt from 'jsonwebtoken';

const generateToken = (userid) => {
  return jwt.sign({ userid }, 'thisisasecret', { expiresIn: '90 days'});
}

export { generateToken as default }