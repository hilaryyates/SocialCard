import React, { useState } from "react";

const Likes = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      {count > 0 ? (
        <div id='likes-wrapper'>
          <span>Likes</span>
          <span>{count}</span>
        </div>
      ) : null}
      <button onClick={() => setCount((count = 1))}>
        <img src='../images/heart.png' />
      </button>
    </div>
  );
};

export default Likes;
