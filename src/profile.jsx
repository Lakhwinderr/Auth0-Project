import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md mb-10">
        <img
          src={user.picture}
          alt={user.name}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div className="flex-grow">
          {" "}
          {/* Added flex-grow to take up remaining space */}
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="ml-auto">
          {" "}
          {/* Aligns the LogoutButton to the right */}
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
