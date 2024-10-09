import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="ml-4 px-4 py-2 font-semibold rounded-lg bg-blue-500" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;