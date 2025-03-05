import React from 'react'
import ExamsCard from './ExamsCard'
import ExamList from './ExamList'

const SscExamList = () => {
  return (
    <div>
        <section className="tab_list">
            <div className="container">
                <div className="title_content  wow zoomIn" data-wow-delay="0.3s">
                    <h2>SSC <span> Staff Selection Commission </span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                </div>
                <div className="row  wow zoomIn" data-wow-delay="0.3s">
                    <div className="exam_tabs">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs sscWrap">
                            <ExamsCard ExamName={'MTS'} />
                            <ExamsCard ExamName={'CHSL'} />
                            <ExamsCard ExamName={'CPO'} />
                            <ExamsCard ExamName={'CGL'} />
                            <ExamsCard ExamName={'SECTIONAL PHASE'} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="EXAM_list">
            <div className="container tab-content">
                <div className="sectionTitle  wow zoomIn" data-wow-delay="0.3s"><h3>Exam list</h3></div>
                <div className="outerList">
                    <div className="row">
                        <ExamList />
                        <ExamList />
                        <ExamList />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SscExamList