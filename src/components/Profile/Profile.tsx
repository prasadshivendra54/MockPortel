import React from 'react'

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
                        <img src="images/user.png" className="img-fluid profile_img" alt="" />
                        {/* <div>
						<span>Language : <select className="border-0">
							<option>English</option>
							<option>French</option>
							<option>english</option>
						</select>
					</div> */}
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3  wow zoomIn" data-wow-delay="0.3s">
                    <div className="refer_money d-flex justify-content-center">
                        <img src="images/rupees-icon.png" className="img-fluid" alt="" /> <span className="float-right">100</span>
                    </div>
                    <a href="#" className="d-block refer_txt">Refer for more </a>

                </div>
            </div>
            <div className="row mb-4  wow zoomIn" data-wow-delay="0.3s">
                <div className="col-sm-12 user_info">
                    <div className="user_info_col">
                        <h4> Name </h4>
                        <p> Mohammad Azharuddin </p>
                    </div>
                    <div className="user_info_col">
                        <h4> Gender </h4>
                        <p> Male </p>
                    </div>
                    <div className="user_info_col">
                        <h4> Date of Birth </h4>
                        <p> 25 jan, 2019 </p>
                    </div>
                    <div className="user_info_col">
                        <h4> Qualification </h4>
                        <p> Graduate </p>
                    </div>
                    <div className="user_info_col">
                        <h4> Contact No. </h4>
                        <p> +91 9898989898 </p>
                    </div>

                    <div className="user_info_col">
                        <button type="button" className="btn btn-primary edit_btn" data-toggle="modal" data-target="#myModal">Edit</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Profile