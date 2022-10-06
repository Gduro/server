import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../containers/firebaseConfig";
// @ts-ignore

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  return (
    <
// @ts-ignore
    UserContext.Provider value={createUser}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  // @ts-ignore

  return UserContext(UserContext);
};
