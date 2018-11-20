import jwt from 'jsonwebtoken';

const generateToken = (userid) => {
  return jwt.sign({ userid }, process.env.JWT_SECRET, { expiresIn: '90 days'});
}

export { generateToken as default }