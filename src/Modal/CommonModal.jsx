import React from "react";
import "./CommonModal.css";
export default function CommonModal(props) {
  const {
    title,
    buttonName,
    children,
    lookClickHandler,
    editClickHandler,
    deleteClickHandler,
  } = props;
  return (
    <div className="modal-wrapper">
      <div className="modal-title">{title}</div>
      <div className="modal-content">{children}</div>
      <button
        className="modal-close"
        onClick={
          title === "查看"
            ? lookClickHandler
            : title === "编辑"
            ? editClickHandler
            : deleteClickHandler
        }
      >
        {buttonName}
      </button>
    </div>
  );
}
