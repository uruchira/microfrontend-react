import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return <button onClick={() => history.push("/dashboard")}>Login</button>;
};

export default Login;
