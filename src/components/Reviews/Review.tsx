import React from "react";
import user from "../../images/user.png";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section className="testimonials_sec">
      <div className="container">
        <div className="row align-items-end  wow zoomIn" data-wow-delay="0.3s">
          <div className="col-sm-12">
            <h2 className="d-flex title">Hear it Directly from our students</h2>
          </div>
          <div className="clients_slider slider">
            <div className="clients_slide">
              <div className="client-section">
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                  description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                />
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                  description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                />
              </div>
            </div>
            <div className="clients_slide">
              <div className="client-section">
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                />
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                  description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                />
              </div>
            </div>
            <div className="clients_slide">
              <div className="client-section">
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                  description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.`}
                />
                <ReviewCard
                  name={"JOHN SMITH"}
                  review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.`}
                  description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
