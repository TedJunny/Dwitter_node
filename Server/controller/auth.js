import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "express-async-errors";
import * as userRepository from "../data/auth.js";

const jwtSecretKey = "oyOO0BF#OsgqoMToEn&tGDdhQsH7sQmv";
const jwtExpiresInDays = "2d";
const bcryptSaltRounds = 12;

export async function signUp(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function signIn(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "invalid user or password" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "invalid user or password" });
  }
  const token = createJwtToken(user.id);
  return res.status(200).json({ token, username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}
