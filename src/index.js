import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    console.log(`Like Count: ${likes}`);
    document.body.className = `bg--${likes % 2}`;
  }, [likes]);

  useEffect(() => {
    if (likes > 0) {
      const timeOut = setTimeout((prev) => setLikes(prev - 1), 1000);
      return () => clearTimeout(timeOut);
    }
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
