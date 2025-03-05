import React from "react";
import "./Report.css";
import ReportCard from "./ReportCard";
import NavItems from "./NavItems";
import {OverallReportTitle, OverallReportSubjectTitle} from "./OverallReport";

const Report = () => {
  return (
    <div className="container aandivadi">
      <div className="outerBox">
        <div className="row">
          <ReportCard
            title={"You Scored"}
            totalScore={"50/200"}
            totalPersentage={90}
            backgroundColor={'oklch(0.808 0.114 19.571)'}
          />

          <ReportCard
            title={"Time Spend"}
            totalScore={"90 Min."}
            totalPersentage={65}
            backgroundColor={'oklch(0.837 0.128 66.29)'}
          />

          <ReportCard
            title={"Accuracy"}
            totalScore={"50/200"}
            totalPersentage={78}
            backgroundColor={'oklch(0.879 0.169 91.605)'}
          />
        </div>
      </div>

      {/* Topper's Result */}
      <div className="outerBox">
        <h2>Topper's Result</h2>
        <div className="row">
          <ReportCard
            title={"Score"}
            totalScore={"200/204"}
            totalPersentage={78}
            backgroundColor={'oklch(0.871 0.15 154.449)'}
          />

          <ReportCard
            title={"Your Score"}
            totalScore={"100/200"}
            totalPersentage={78}
            backgroundColor={'oklch(0.855 0.138 181.071)'}
          />

          <ReportCard
            title={"Time"}
            totalScore={"75 Minutes"}
            totalPersentage={78}
            backgroundColor={'oklch(0.645 0.246 16.439)'}
          />
        </div>
      </div>

      <div className="graphicalWrap">
        <div className="float-left">
          <h4>Graphical View </h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="float-right">
          <div className="circle image">
            <img src="https://dummyimage.com/50" />
          </div>
        </div>
        <div className="clear"></div>
      </div>

      <ul className="nav nav-tabs small" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">
            Overall Result
          </a>
        </li>
        <NavItems navItems={'Quantative Aptitude'} />
        <NavItems navItems={'English'} />
        <NavItems navItems={'General Awareness'} />
        <NavItems navItems={'Reasoning'} />
        <NavItems navItems={'Current Affairst'} />
      </ul>
      {/* Tab panes */}
      <div className="tab-content">
        <div id="home" className="container tab-pane active ">
          <div className="grid__3g113">
            <OverallReportTitle 
                percent={75}
                correctAns={'Correct'}
                notAttempted={'Not Attempted'}
                answered={'Answered'}
            />
            
            <OverallReportSubjectTitle 
                percent={75}
                quantativeAptitude={'Quantative Aptitude'}
                english={'English'}
                generalAwareness={'General Awareness'}
                reasoning={'Reasoning'}
                currentAffairs={'Current Affairs'}
            />

            <div>
              <table className="table background p-2 small mb-0">
                <thead>
                  <tr className="text-secondary">
                    <th>Sections</th>
                    <th>Score</th>
                    <th className="text-right">Time Spend</th>
                  </tr>
                </thead>
                <tbody className="bg-white white">
                  <tr>
                    <td>Quantative Aptitude</td>
                    <td>10/50</td>
                    <td className="text-right">00:15 </td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>10/50</td>
                    <td className="text-right">00:15 </td>
                  </tr>
                  <tr>
                    <td>General Awareness</td>
                    <td>10/50</td>
                    <td className="text-right">00:15 </td>
                  </tr>
                  <tr>
                    <td>Reasoning</td>
                    <td>10/50</td>
                    <td className="text-right">00:15 </td>
                  </tr>
                  <tr>
                    <td>Current Affairs</td>
                    <td>10/50</td>
                    <td className="text-right">00:15 </td>
                  </tr>
                  <tr className="blue">
                    <td>total</td>
                    <td>10/50</td>
                    <td>00:15 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="menu1" className="container tab-pane fade">
          <br />
          <h3>Menu 1</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div id="menu2" className="container tab-pane fade">
          <br />
          <h3>Menu 2</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div id="menu3" className="container tab-pane fade">
          <br />
          <h3>Menu 2</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div id="menu4" className="container tab-pane fade">
          <br />
          <h3>Menu 2</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div id="menu5" className="container tab-pane fade">
          <br />
          <h3>Menu 2</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
