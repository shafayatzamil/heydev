import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authecticUser,setAuthenticUser]= useState(null);

  // share value for all component
  const authInfo = {
    authecticUser,setAuthenticUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
