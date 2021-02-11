//dependencies
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();


  if (isAuthenticated){
      console.log("is authenticated")
  } else if(!isAuthenticated){
      console.log("not authenticated")
  }else{
      console.log("who knows")
  }

  return (
    <button className=" btn btn-link" onClick={() => logout({ returnTo: window.location.origin })}>
      log out
    </button>
  );
};

export default LogoutButton;