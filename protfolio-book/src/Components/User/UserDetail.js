import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./User.scss";

function UserDetail() {
  let location = useLocation();
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(location?.state?.data);
  }, []);

  return (
    <>
      <div className="flex ml-26">
        <img src={`/back.svg`} className="cardDetailIcon" alt="User" />
        <h1>User Detail</h1>
      </div>
      <br />
      <div className="flex userDetailLayout">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${userData?.username}.svg`}
          className="UserDetailImage"
          alt="User"
        />
        <div className="userDetailBody">
          <div className="flex">
            <h3>Name: </h3>
            <h3 className="greyColor">{userData?.name}</h3>
          </div>
          <div className="flex">
            <h3>Website:</h3>
            <h3 className="greyColor">{userData?.website}</h3>
          </div>
          <div className="flex">
            <h3>Phone:</h3>
            <h3 className="greyColor">{userData?.phone}</h3>
          </div>
          <div className="flex">
            <h3>Email:</h3>
            <h3 className="greyColor">{userData?.email}</h3>
          </div>
          <div className="flex">
            <h3>Company:</h3>
            <h3 className="greyColor">{`${userData?.company?.name} , `}</h3>
          </div>
          <div className="flex">
            <h3>Address:</h3>
            <h3 className="greyColor">{`${userData?.address?.city} , ${userData?.address?.street}  , ${userData?.address?.suite}  , ${userData?.address?.zipcode}`}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
