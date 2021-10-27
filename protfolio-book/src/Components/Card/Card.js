import React, { useEffect, useState } from "react";
import Api from "../../Api";
import "./Card.scss";
import Popup from "../Popup/Popup";
import PopupUser from "../User/PopupUser";

function Card() {
  const [userDetail, setUserDetail] = useState();
  const [like, setLike] = useState();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    Api.getUsers().then((response) => {
      setUserDetail(response.data);
      debugger;
    });
  }, []);

  const toggleLike = (id) => {
    setLike(id);
  };

  var popElement = (record) => {
    setOpen(true);
    setUserData(record);
  };

  return (
    <>
      <div className="Card">
        {userDetail?.map((data) => {
          return (
            <div className="cardLayout">
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${data?.username}.svg`}
                className="UserImage"
                alt="User"
              />
              <div className="cardBody mb-14">
                <h4 className="mt-10 mb-6">{data?.name}</h4>
                <div className="flex">
                  <img src={`/email.svg`} className="cardBodyIcon" alt="User" />
                  <h4 className="mt-10 mb-10 greyColor">{data?.email}</h4>
                </div>
                <div className="flex">
                  <img
                    src={`/phonecall.svg`}
                    className="cardBodyIcon"
                    alt="User"
                  />
                  <h4 className="mt-10 mb-10 greyColor">{data?.phone}</h4>
                </div>
                <div className="flex">
                  <img src={`/web.svg`} className="cardBodyIcon" alt="User" />
                  <h4 className="mt-10 mb-10 greyColor">{data?.website}</h4>
                </div>
              </div>
              <div className="flex justify-around cardAction mb-10 pt-10">
                {like === data?.id || (
                  <img
                    src={`/like.svg`}
                    className="cardBodyIcon"
                    alt="User"
                    onClick={() => toggleLike(data?.id)}
                  />
                )}
                {like === data?.id && (
                  <img
                    src={`/heart.svg`}
                    className="cardBodyIcon"
                    alt="User"
                    onClick={toggleLike}
                  />
                )}
                <img
                  src={`/edit.svg`}
                  className="cardBodyIcon"
                  alt="User"
                  onClick={() => popElement(data)}
                />
                <img src={`/delete.svg`} className="cardBodyIcon" alt="User" />
              </div>
            </div>
          );
        })}
      </div>
      <Popup
        open={open}
        handleClose={() => setOpen(false)}
        width="sm"
        title="Edit User"
      >
        <PopupUser data={userData} cancel={() => setOpen(false)} />
        {/* <IssueDetail
          data={issueData}
          handleClose={() => setOpen(false)}
          issueDataFunction={issueDataFunction}
        /> */}
      </Popup>
    </>
  );
}

export default Card;
