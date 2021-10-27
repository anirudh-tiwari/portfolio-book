import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./User.scss";
import { useHistory } from "react-router-dom";

function UserDetail() {
  const history = useHistory();
  let location = useLocation();
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(location?.state?.data);
  }, []);

  const backPage = () => {
    history.push("/");
  };

  return (
    <>
      <div className="flex ml-26">
        <img
          src={`/back.svg`}
          className="cardDetailIcon"
          alt="User"
          onClick={backPage}
        />
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
            <h3 className="greyColor pl-10">{userData?.name}</h3>
          </div>
          <div className="flex">
            <h3>Website:</h3>
            <h3 className="greyColor pl-10">{userData?.website}</h3>
          </div>
          <div className="flex">
            <h3>Phone:</h3>
            <h3 className="greyColor pl-10">{userData?.phone}</h3>
          </div>
          <div className="flex">
            <h3>Email:</h3>
            <h3 className="greyColor pl-10">{userData?.email}</h3>
          </div>
          <div className="flex">
            <h3>Company:</h3>
            <h3 className="greyColor pl-10">{`${userData?.company?.name} , `}</h3>
          </div>
          <div className="flex">
            <h3>Address:</h3>
            <h3 className="greyColor pl-10">{`${userData?.address?.city} , ${userData?.address?.street}  , ${userData?.address?.suite}  , ${userData?.address?.zipcode}`}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
