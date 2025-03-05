import React from "react";

const Plans = () => {
  return (
    <div>
      <div className="section small-section planWrap padding60">
        <div className="container">
          <div className="content_wrap  wow zoomIn" data-wow-delay="0.3s">
            <div className="content_banner">
              <div className="title_content">
                <h2> Pricing Guide </h2>
                <p style={{marginBottom: "0px"}}>
                  The .card-deck className creates an{" "}
                  <strong> equal height and width </strong> grid of cards. The
                  layout will automatically adjust as you insert more cards.
                </p>
                <p style={{marginBottom: "0px"}}>
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
          <div className="grid">
            <div className="top">
              <h2>Rs. 0</h2>
              <p>Demo</p>
            </div>
            <div className="middle">
              <p className="tagline">
                You can have our demo test for your convenience.
              </p>
              <strong> All this great features</strong>
              <p>Demo mock test for CGL tier 1</p>
              <p>Demo mock test for CHSL tier 1</p>
              <p>5 sets current affair (from oct to current)</p>
              <p>Questions solution and hints for answer</p>

              <p className="thanks">Thanks</p>
            </div>
            <div className="bottom">
              <a href="javascript:;" className="choose-btn">
                Choose this plan{" "}
              </a>
            </div>
          </div>
          <div className="grid">
            <div className="top">
              <h2>Rs. 199</h2>
              <p>Standard</p>
            </div>
            <div className="middle">
              <div className="popular-tag">Popular</div>
              <p className="tagline">
                You can have our demo test for your convenience.
              </p>

              <strong> All this great features</strong>
              <p>15 set test for CGL tier 1</p>
              <p>
                3 months current affair(200 questions for each of last 3 months)
              </p>
              <p>Questions solution and hints for every questions</p>
              <p>Contact and chat with our experts to discuss the solution</p>
              <p>Report with every section</p>
              <p>Rewards for top 3 Standard sets students</p>

              <p className="thanks">Thanks</p>
            </div>
            <div className="bottom">
              <a href="javascript:;" className="choose-btn current-plan">
                Current Plan
              </a>
            </div>
          </div>
          <div className="grid">
            <div className="top">
              <h2>Rs. 299</h2>
              <p>Premium</p>
            </div>
            <div className="middle">
              <p className="tagline">
                You can have our demo test for your convenience.
              </p>

              <strong> All this great features</strong>
              <p>15 set test for CGL tier 1</p>
              <p>15 set test for CHSL tier 1</p>
              <p>
                4 months current affair(300 questions for each of last 4 months)
              </p>
              <p>Questions solution and hints for every questions</p>
              <p>Contact and chat with our experts to discuss the solution</p>
              <p>Report with every section</p>
              <p>Rewards for top 5 Premium sets students</p>

              <p className="thanks">Thanks</p>
            </div>
            <div className="bottom">
              <a href="javascript:;" className="choose-btn">
                Choose this plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
