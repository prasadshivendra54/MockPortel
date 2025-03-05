import React from "react";

interface ValidExamName {
  ExamName: string
}

const ExamsCard:React.FC<React.PropsWithChildren<ValidExamName>> = ({ 
  ExamName
}) => {
  return (
    <li className="nav-item">
      <img src="images/ssc.png" className="img-fluid" alt="" />
      <h3>{ExamName}</h3>
    </li>
  );
};

export default ExamsCard;
