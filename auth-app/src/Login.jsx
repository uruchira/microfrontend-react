import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/dashboard")}>Login</button>;
};

export default Login;
