// src/lib/firebase/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { app } from './config.js';

const auth = getAuth(app);

// Register
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Forgot Password
export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

// Logout
export const logoutUser = () => signOut(auth);

// Export auth instance (if needed for route protection)
export { auth };
