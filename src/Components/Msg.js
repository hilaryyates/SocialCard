import React from "react";

const Msg = (props) => {
  return (
    <div>
      <section>{props.msg}</section>
      <div>{props.date}</div>
    </div>
  );
};

export default Msg;
