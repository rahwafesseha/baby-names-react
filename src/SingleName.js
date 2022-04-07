import React from "react";
const SingleName = ({ value, index ,onClick}) => {
  return (
    <p keys={index} className={value.sex} onClick={onClick}>
      {value.name}
    </p>
  );
};
export default SingleName;