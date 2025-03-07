import React from "react";
import PlansCard from "./PlansCard";

const Plans = () => {
  return (
    <div>
      <div className="section small-section planWrap padding60">
        <div className="container">
          <div className="content_wrap  wow zoomIn" data-wow-delay="0.3s">
            <div className="content_banner">
              <div className="title_content">
                <h2> Pricing Guide </h2>
                <p style={{ marginBottom: "0px" }}>
                  The .card-deck className creates an{" "}
                  <strong> equal height and width </strong> grid of cards. The
                  layout will automatically adjust as you insert more cards.
                </p>
                <p style={{ marginBottom: "0px" }}>
                  In this example we have added extra content to the first card,
                  to make it taller. Notice how the other cards follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plan-wrapper">
        <div className=" gridView wow zoomIn" data-wow-delay="0.3s">
          <PlansCard
            prise={"Rs. 0"}
            planName={"Demo"}
            description={"You can have our demo test for your convenience."}
            features={"All this great features"}
            featuresOne={"Demo mock test for CGL tier 1"}
            featuresTwo={"Demo mock test for CHSL tier 1"}
            featuresThree={"5 sets current affair (from oct to current)"}
            featuresFour={"Questions solution and hints for answer"}
            message={"Thanks"}
            choosePlan={"Choose this plan"}
          />

          <PlansCard
            prise={"Rs. 199"}
            planName={"Standard"}
            description={"You can have our demo test for your convenience."}
            features={"All this great features"}
            featuresOne={"15 set test for CGL tier 1"}
            featuresTwo={"3 months current affair(200 questions for each of last 3 months)"}
            featuresThree={"Questions solution and hints for every questions"}
            featuresFour={"Report with every section"}
            message={"Thanks"}
            choosePlan={"Current Plan"}
          />

          <PlansCard
            prise={"Rs. 299"}
            planName={"Premium"}
            description={"You can have our demo test for your convenience."}
            features={"All this great features"}
            featuresOne={"15 set test for CGL tier 1"}
            featuresTwo={"15 set test for CHSL tier 1"}
            featuresThree={"4 months current affair(300 questions for each of last 4 months)"}
            featuresFour={"Questions solution and hints for every questions"}
            message={"Thanks"}
            choosePlan={"Choose this plan"}
          />
        </div>
      </div>
    </div>
  );
};

export default Plans;
