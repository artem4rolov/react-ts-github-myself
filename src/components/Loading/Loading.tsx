import React from "react";
import { ReactComponent as LoadingIcon } from "../../assets/icon-loader.svg";

const Loading = () => {
  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <LoadingIcon />
    </div>
  );
};

export default Loading;
