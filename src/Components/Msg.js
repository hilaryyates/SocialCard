import React from "react";

const Msg = (props) => {
  return (
    <div>
      <div>{props.date}</div>
      <section>{props.msg}</section>
    </div>
  );
};

export default Msg;
