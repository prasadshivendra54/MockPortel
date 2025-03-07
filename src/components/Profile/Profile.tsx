import React from "react";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div>
      <div className="section small-section partners padding60">
        <div className="container">
          <div className="content_wrap  wow zoomIn" data-wow-delay="0.3s">
            <div className="content_banner">
              <div className="title_content">
                <h2> Profile </h2>
                <p>Lorem ipsum dolor sit amet, </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="user_details">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-9 col-lg-9">
              <div className="d-flex  wow zoomIn" data-wow-delay="0.3s">
                <img
                  src="images/user.png"
                  className="img-fluid profile_img"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-sm-3 col-lg-3  wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="refer_money d-flex justify-content-center">
                <img
                  src="images/rupees-icon.png"
                  className="img-fluid"
                  alt=""
                />
                <span className="float-right">100</span>
              </div>
              <a href="#" className="d-block refer_txt">
                Refer for more
              </a>
            </div>
          </div>
          <div className="row mb-4  wow zoomIn" data-wow-delay="0.3s">
            <div className="col-sm-12 user_info">                
              <ProfileInfo heading={'Name'} paragraph={'Mohammad Azharuddin'}/>
              <ProfileInfo heading={'Gender'} paragraph={'Male'}/>
              <ProfileInfo heading={'Date of Birth'} paragraph={'25 jan, 2019'}/>
              <ProfileInfo heading={'Qualification'} paragraph={'Graduate'}/>
              <ProfileInfo heading={'Contact No.'} paragraph={'+91 9898989898'}/>

              <div className="user_info_col">
                <button
                  type="button"
                  className="btn btn-primary edit_btn"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
