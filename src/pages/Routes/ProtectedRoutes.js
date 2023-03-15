import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { authecticUser} = useContext(AuthContext);
  const location = useLocation();

  if (authecticUser) {
    return children;
  }

  return <Navigate to="/" state={{ from: location.pathname }} replace />;
};

export default ProtectedRoute;
