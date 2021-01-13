import React, { useState } from "react";

const Likes = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Like</button>
      {count > 0 ? <div>{count}</div> : null}
    </div>
  );
};

export default Likes;
