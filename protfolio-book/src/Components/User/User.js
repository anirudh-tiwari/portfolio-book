import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Redux/ActionCreator/Users";
import Card from "../Card/Card";
import "../Card/Card.scss";

function User(props) {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {users.length}{" "}
      <div className="Card">
        {users.length
          ? users.map((user) => <Card data={user} />)
          : "Loading..."}
      </div>
    </>
  );
}

function mapStateToProps({ users }) {
  return {
    users: users.data,
  };
}

export default connect(mapStateToProps)(User);
