import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Redux/ActionCreator/Users";
import Card from "../Card/Card";
import "../Card/Card.scss";
import Popup from "../Popup/Popup";
import PopupUser from "../User/PopupUser";
function User(props) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState();
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const popupelementData = (data) => {
    setOpen(true);
    setUserData(data);
  };

  return (
    <>
      <div className="Card">
        {users.length
          ? users.map((user) => (
              <Card data={user} popElement={(data) => popupelementData(data)} />
            ))
          : "Loading..."}
      </div>
      <Popup
        open={open}
        handleClose={() => setOpen(false)}
        width="sm"
        title="Edit User"
      >
        <PopupUser data={userData} cancel={() => setOpen(false)} />
      </Popup>
    </>
  );
}

function mapStateToProps({ users }) {
  return {
    users: users.data,
  };
}

export default connect(mapStateToProps)(User);
