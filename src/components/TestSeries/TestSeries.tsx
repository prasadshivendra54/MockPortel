import React from "react";
import Card from "./Card";

const TestSeries = () => {
  return (
    <div>
      <section className="banner_sec homeBanner test-series">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_content wow zoomIn" data-wow-delay="0.3s">
                <h2>
                  Lorem ipsum dolor <span>sit amet, consectetur </span>
                  adipiscing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel velit maximus
                </p>
                <a href="/" className="custom_btn">
                  Take The Test
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="test_list">
        <div className="container">
          <div className="sectionTitle wow zoomIn" data-wow-delay="0.3s">
            {" "}
            <h3>
              <img src="images/title-icon.png" className="img-fluid" alt="" /> Mock
              test list{" "}
            </h3>
          </div>

          <div className="listOuter wow zoomIn" data-wow-delay="0.3s">
            <div className="row">
              {/* 01 */}
              <Card 
                subTitle={'SSC'}
                title={'CGL'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 02 */}
              <Card 
                subTitle={'SSC'}
                title={'CHSL'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 03 */}
              <Card 
                subTitle={'SSC'}
                title={'CPO'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              <Card 
                subTitle={'SSC'}
                title={'MTS'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 02 */}
              <Card 
                subTitle={'SSC'}
                title={'STENO'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 03 */}
              <Card 
                subTitle={'SSC'}
                title={'SECTIONAL PHASE'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />
            </div>
          </div>

          {/* 02 SSC Sectional Test */}
          <div className="listOuter wow zoomIn" data-wow-delay="0.3s">
            <div className="row">

              {/* 01 */}
              <Card 
                subTitle={'SSC Sectional Test'}
                title={'General intelligence'}
                testLinkOne={'Math'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 02 */}
              <Card 
                subTitle={'SSC Sectional Test'}
                title={'Quantitative aptitude'}
                testLinkOne={'Math'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 03 */}
              <Card 
                subTitle={'SSC Sectional Test'}
                title={'General awareness'}
                testLinkOne={'Math'}
                testLinkTwo={'SSC Tier 2'}
              />

              <Card 
                subTitle={'SSC Sectional Test'}
                title={'English language & compression'}
                testLinkOne={'Math'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 02 */}
              <Card 
                subTitle={'SSC Sectional Test'}
                title={'Current affairs'}
                testLinkOne={'Math'}
                testLinkTwo={'SSC Tier 2'}
              />
            </div>
          </div>

          {/* 03 Railway */}
          <div className="listOuter wow zoomIn" data-wow-delay="0.3s">
            <div className="row">
              {/* 01 */}
              <Card 
                subTitle={'Railway'}
                title={'NTPC'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 02 */}
              <Card 
                subTitle={'Railway'}
                title={'ALP'}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 03 */}
              <Card 
                subTitle={'Railway'}
                title={`roup'C`}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />

              {/* 04 */}
              <Card 
                subTitle={'Railway'}
                title={`Group'D`}
                testLinkOne={'SSC Tier 1'}
                testLinkTwo={'SSC Tier 2'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestSeries;
