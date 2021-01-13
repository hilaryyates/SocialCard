import React, { Component } from "react";
import cardDetails from "../cardDetails";
import Msg from "./Msg";
import Likes from "./Likes";

class Card extends React.Component {
  render() {
    return (
      <div>
        <Msg msg={cardDetails.msg} date={cardDetails.date.toString()} />
        <Likes />
      </div>
    );
  }
}

export default Card;
