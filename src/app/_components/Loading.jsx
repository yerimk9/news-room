import React from "react";
import { FadeLoader } from "react-spinners";

function Loading(props) {
  return (
    <div className="loading-container">
      <FadeLoader height={40} margin={30} radius={60} width={10} />
      <p>로딩중입니다 . . .</p>
    </div>
  );
}

export default Loading;
