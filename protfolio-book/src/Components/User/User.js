import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUsers } from "../../Redux/Actions/Users";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  return (
    <>
      <h1>User-{users}</h1>
    </>
  );
}

export default User;
