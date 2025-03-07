import React from "react";

interface ValidPlanTitle {
    prise: string
    planName: string
    description: string
    features: string
    featuresOne: string
    featuresTwo: string
    featuresThree: string
    featuresFour: string
    message: string
    choosePlan: string
}

const PlansCard:React.FC<React.PropsWithChildren<ValidPlanTitle>> = ({
    prise,
    planName,
    description,
    features,
    featuresOne,
    featuresTwo,
    featuresThree,
    featuresFour,
    message,
    choosePlan
}) => {
  return (
    <div className="grid">
      <div className="top">
        <h2>{prise}</h2>
        <p>{planName}</p>
      </div>
      <div className="middle">
        <p className="tagline">
          {description}
        </p>
        <strong>{features}</strong>
        <p>{featuresOne}</p>
        <p>{featuresTwo}</p>
        <p>{featuresThree}</p>
        <p>{featuresFour}</p>

        <p className="thanks">{message}</p>
      </div>
      <div className="bottom">
        <a href="javascript:;" className="choose-btn">
          {choosePlan}
        </a>
      </div>
    </div>
  );
};

export default PlansCard;
