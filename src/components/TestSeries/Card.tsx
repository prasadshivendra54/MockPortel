import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/examtest">{testLinkOne}</Link>
              <Link to="/examtest">{testLinkTwo}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
