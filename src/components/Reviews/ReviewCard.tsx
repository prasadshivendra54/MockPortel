import React from "react";
import user from '../../images/user.png'

interface validReview {
    name: string,
    review: string,
    description: string
}

const ReviewCard:React.FC<React.PropsWithChildren<validReview>> = ({
    name,
    review,
    description
}) => {
  return (
    <div className="client">
      <div className="client_img">
        <img src={user} className="img-fluid" alt="" />
      </div>
      <div className="clients_content">
        <h5>{name}</h5>
        <p className="mb-2">{review}</p>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
