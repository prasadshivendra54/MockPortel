import React from "react";

interface ValidReportCardTitles {
  title: string
  totalScore: string
  totalPersentage: number
  backgroundColor: string
}

const ReportCard:React.FC<React.PropsWithChildren<ValidReportCardTitles>> = ({
    title,
    totalScore,
    totalPersentage,
    backgroundColor
}) => {
  return (
    <div className="col-md-4">
      <div className="dataBox one" style={{background: backgroundColor}}>
        <div className="float-left">
          <p>{title}</p>
          <p>
            <strong>{totalScore}</strong>
          </p>
        </div>
        <div className="float-right">
          <div className="circle">
            <div className="count">{totalPersentage}%</div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default ReportCard;
