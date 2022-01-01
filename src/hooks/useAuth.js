import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  async function unsubscribe() {
    return await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }
  React.useEffect(() => {
    return unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
