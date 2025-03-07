import React from "react";

const ExamTest = () => {
  return (
    <div className="row">
      {/* left box */}
      <div className="col-md-9 padding0 left_box">
        <div className="maintitle">
          <h3>SSC CGL tier - 1 </h3>
        </div>
        <div className="whiteBox">
          <div className="tabsWrap">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  role="tab"
                  data-toggle="tab"
                >
                  Section
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" role="tab" data-toggle="tab">
                  General Awarness
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" role="tab" data-toggle="tab">
                  Quantitative Aptitude
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" role="tab" data-toggle="tab">
                  English Language
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="tab1">
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question Type :- MCA </h6>
                  </div>
                  <div className="right_box">
                    <div className="timebox">
                      <h6>Time Left:- 10:00AM</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>General Awarness </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6> +2,0.5</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question No. 1 </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6>
                        {" "}
                        View in <span>12</span>
                      </h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tabboy">
                  <div className="questions-outer">
                    <h3 className="question">
                      <span className="sr-no">Q1:</span> Lorem Ipsum Is Simply Dummy
                      Text Of The Printing And Typesetting Industry?{" "}
                    </h3>
                    <div className="answer">
                      <ul className="grid-2">
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <div className="clear"></div>
                      </ul>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="left_box">
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Mark as preview{" "}
                      </a>
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Previous{" "}
                      </a>
                    </div>
                    <div className="right_box">
                      <a href="/" className="commonBtn">
                        {" "}
                        Save & Next{" "}
                      </a>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>

              {/* 02 */}
              <div role="tabpanel" className="tab-pane fade" id="tab2">
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question Type :- MCA </h6>
                  </div>
                  <div className="right_box">
                    <div className="timebox">
                      <h6>Time Left:- 10:00AM</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>General Awarness </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6> +2,0.5</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question No. 1 </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6>
                        {" "}
                        View in <span>12</span>
                      </h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tabboy">
                  <div className="questions-outer">
                    <h3 className="question">
                      <span className="sr-no">Q1:</span> Lorem Ipsum Is Simply Dummy
                      Text Of The Printing And Typesetting Industry?{" "}
                    </h3>
                    <div className="answer">
                      <ul>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <div className="clear"></div>
                      </ul>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="left_box">
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Mark as preview{" "}
                      </a>
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Previous{" "}
                      </a>
                    </div>
                    <div className="right_box">
                      <a href="/" className="commonBtn">
                        {" "}
                        Save & Next{" "}
                      </a>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="tab3">
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question Type :- MCA </h6>
                  </div>
                  <div className="right_box">
                    <div className="timebox">
                      <h6>Time Left:- 10:00AM</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>General Awarness </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6> +2,0.5</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question No. 1 </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6>
                        {" "}
                        View in <span>12</span>
                      </h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tabboy">
                  <div className="questions-outer">
                    <h3 className="question">
                      <span className="sr-no">Q1:</span> Lorem Ipsum Is Simply Dummy
                      Text Of The Printing And Typesetting Industry?{" "}
                    </h3>
                    <div className="answer">
                      <ul>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <div className="clear"></div>
                      </ul>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="left_box">
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Mark as preview{" "}
                      </a>
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Previous{" "}
                      </a>
                    </div>
                    <div className="right_box">
                      <a href="/" className="commonBtn">
                        {" "}
                        Save & Next{" "}
                      </a>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="tab4">
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question Type :- MCA </h6>
                  </div>
                  <div className="right_box">
                    <div className="timebox">
                      <h6>Time Left:- 10:00AM</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>General Awarness </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6> +2,0.5</h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="tabHeader">
                  <div className="left_box">
                    {" "}
                    <h6>Question No. 1 </h6>
                  </div>
                  <div className="right_box">
                    {" "}
                    <div className="timebox">
                      <h6>
                        {" "}
                        View in <span>12</span>
                      </h6>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tabboy">
                  <div className="questions-outer">
                    <h3 className="question">
                      <span className="sr-no">Q1:</span> Lorem Ipsum Is Simply Dummy
                      Text Of The Printing And Typesetting Industry?{" "}
                    </h3>
                    <div className="answer">
                      <ul>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <li>
                          {" "}
                          <label className="radio">
                            Lorem Ipsum Dolor{" "}
                            <input
                              type="radio"
                              name="alphabets"
                              id="trigger"
                              data-gender="location"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </li>
                        <div className="clear"></div>
                      </ul>
                    </div>
                  </div>

                  <div className="bottomBox">
                    <div className="left_box">
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Mark as preview{" "}
                      </a>
                      <a href="/" className="commonBtn leftBtn">
                        {" "}
                        Previous{" "}
                      </a>
                    </div>
                    <div className="right_box">
                      <a href="/" className="commonBtn">
                        {" "}
                        Save & Next{" "}
                      </a>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right box  */}
      <div className="col-md-3 padding0 right_box">
        <div className="card card-profile">
          <div className="maintitle">
            <h3>Your Details </h3>
          </div>

          <div className="main-body">
            <div className="profileIcon">
              <img src="images/user.jpg" />
            </div>
            <h4>Varun Kumar</h4>
            <h6>10 March 1995 </h6>
            <a href="mailto:help.co"> designer@gmail.com </a>
          </div>
          <div className="maintitle">
            <h3> Pattern </h3>
          </div>
          <div className="main-body">
            <ul className="answeredSimble">
              <li>
                <span className="current"> </span> Answered{" "}
              </li>
              <li>
                <span className="not_attempt"> </span> Not Answered{" "}
              </li>
              <li>
                <span className="preview"> </span> Marked{" "}
              </li>
              <li>
                <span className="answered"> </span> Not Visited{" "}
              </li>
              <li>
                <span className="current"> </span> Answered & mark for review & Blue
                with Sign.
              </li>
            </ul>
          </div>
          <div className="maintitle">
            <h3> Section:Lorem ipsum </h3>
          </div>
          <div className="main-body">
            <ul className="countingWrap">
              <li className="current">1</li>
              <li className="not_attempt">2</li>
              <li className="answered">3</li>
              <li className="not_answered">4</li>
              <li className="preview">5</li>

              <li className="current">6</li>
              <li className="not_attempt">7</li>
              <li className="answered">8</li>
              <li className="not_answered">9</li>
              <li className="preview">10</li>

              <li className="current">11</li>
              <li className="not_attempt">12</li>
              <li className="answered">13</li>
              <li className="not_answered">14</li>
              <li className="preview">15</li>

              <li className="current">16</li>
              <li className="not_attempt">17</li>
              <li className="answered">18</li>
              <li className="not_answered">19</li>
              <li className="preview">20</li>

              <li className="current">21</li>
              <li className="not_attempt">22</li>
              <li className="answered">23</li>
              <li className="not_answered">24</li>
              <li className="preview">25</li>
            </ul>
          </div>
          <div className="btnWrap">
            <a href="/" className="commonBtn submit">
              {" "}
              Submit{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTest;
