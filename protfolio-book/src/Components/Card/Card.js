import React, { useEffect, useState } from "react";
import Api from "../../Api";
import "./Card.scss";

function Card() {
  const [userDetail, setUserDetail] = useState();
  const [like, setLike] = useState();

  useEffect(() => {
    Api.getUsers().then((response) => {
      setUserDetail(response.data);
      debugger;
    });
  }, []);

  const toggleLike = (id) => {
    setLike(id);
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
                <img src={`/edit.svg`} className="cardBodyIcon" alt="User" />
                <img src={`/delete.svg`} className="cardBodyIcon" alt="User" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
