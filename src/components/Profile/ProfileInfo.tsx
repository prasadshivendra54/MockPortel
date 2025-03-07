import React from "react";

interface ValidInfo {
    heading: string
    paragraph: string
}

const ProfileInfo:React.FC<React.PropsWithChildren<ValidInfo>> = ({
    heading,
    paragraph
}) => {
  return (
    <div className="user_info_col">
      <h4>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default ProfileInfo;
