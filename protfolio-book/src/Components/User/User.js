import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Redux/ActionCreator/Users";
import Card from "../Card/Card";

function User(props) {
  const { dispatch, users } = props;
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return <>{usersData.length ? <Card data={usersData} /> : "Loading..."}</>;
}

function mapStateToProps({ users }) {
  return {
    users: users.data,
  };
}

export default connect(mapStateToProps)(User);
