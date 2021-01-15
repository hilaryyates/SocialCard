import React, { Component } from "react";
import cardDetails from "../cardDetails";
import Msg from "./Msg";
import Likes from "./Likes";
import "../App.css";

class Card extends React.Component {
  render() {
    return (
      <div id='card-wrapper'>
        <section>
          <img id='avatar' src={cardDetails.avatar} />
          <div>
            <a href='#'>{cardDetails.name}</a>
            <div>@{cardDetails.displayName}</div>
          </div>
        </section>
        <section>
          <Msg msg={cardDetails.msg} date={cardDetails.date.toDateString()} />
          <Likes />
        </section>
      </div>
    );
  }
}

export default Card;
