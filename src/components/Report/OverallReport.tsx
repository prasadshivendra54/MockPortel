import React from "react";

interface ValidReportTitle {
  percent: number
  correctAns: string
  notAttempted: string
  answered: string
}

const OverallReportTitle:React.FC<React.PropsWithChildren<ValidReportTitle>> = ({
  percent,
  correctAns,
  notAttempted,
  answered,
}) => {
  return (
      <div className="background p-2">
        <div className="progress__circle m-auto p-1">
          <span>{percent}%</span>
        </div>
        <div className="py-3 pl-2 ">
          <div className="grid__2g115 my-1">
            <div className="color__box blue"></div>
            <p className="small mb-0">{correctAns}</p>
          </div>
          <div className="grid__2g115 my-1">
            <div className="color__box red"></div>
            <p className="small mb-0">{notAttempted}</p>
          </div>
          <div className="grid__2g115">
            <div className="color__box green"></div>
            <p className="small mb-0">{answered}</p>
          </div>
        </div>
      </div>
  );
};

// ---------

interface ValidSubjectTitle {
  percent: number
  quantativeAptitude: string
  english: string
  generalAwareness: string
  reasoning: string
  currentAffairs: string
}


const OverallReportSubjectTitle:React.FC<React.PropsWithChildren<ValidSubjectTitle>> = ({
    percent,
    quantativeAptitude,
    english,
    generalAwareness,
    reasoning,
    currentAffairs,
}) =>{
    return (
        <div className="background p-2">
        <div className="progress__circle m-auto p-1">
          <span>{percent}%</span>
        </div>
        <div className="py-3 pl-2">
          <div className="grid__2g115 my-1">
            <div className="color__box green"></div>
            <p className="small mb-0">{quantativeAptitude}</p>
          </div>
          <div className="grid__2g115 my-1">
            <div className="color__box yellow"></div>
            <p className="small mb-0">{english}</p>
          </div>
          <div className="grid__2g115 my-1">
            <div className="color__box red"></div>
            <p className="small mb-0">{generalAwareness}</p>
          </div>
          <div className="grid__2g115 my-1">
            <div className="color__box blue"></div>
            <p className="small mb-0">{reasoning}</p>
          </div>
          <div className="grid__2g115 my-1">
            <div className="color__box purple"></div>
            <p className="small mb-0">{currentAffairs}</p>
          </div>
        </div>
      </div>
    )
}

export {OverallReportTitle, OverallReportSubjectTitle}

