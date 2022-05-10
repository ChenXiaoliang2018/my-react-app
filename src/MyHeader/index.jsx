import React from "react";

import "./index.css";

export default function MyHeader(props) {
  const { setShowInput } = props;
  return (
    <>
      <div className="header-bar">
        <div className="header-title">TodoList</div>
        <div className="header-add" onClick={setShowInput}>
          &#43;
        </div>
      </div>
    </>
  );
}
