import React from "react";
import { useSelector } from "react-redux";

function User() {
  const users = useSelector((state) => state.users);
  return (
    <>
      <h1>User-{users}</h1>
    </>
  );
}

export default User;
