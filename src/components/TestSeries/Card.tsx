import React from "react";

interface ValidateCard {
    subTitle: string;
    title: string;
    testLinkOne: string;
    testLinkTwo: string;
}

const Card:React.FC<React.PropsWithChildren<ValidateCard>> = ({ 
    subTitle,
    title, 
    testLinkOne, 
    testLinkTwo 
}) => {
  return (
    <div className="col-sm-4">
      <h3 className="subTitle">{subTitle}</h3>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="images/ssc.png" className="img-fluid" alt="" />
            <h5>{title}</h5>
          </div>
          <div className="flip-card-back">
            <div className="links">
              <a href="#">{testLinkOne}</a>
              <a href="#">{testLinkTwo}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
