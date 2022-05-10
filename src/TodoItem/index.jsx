import React from "react";

import "./index.css";
export default function TodoItem(props) {
  const { todoItem, changeItemChecked, buttonClickHandler } = props;
  return (
    <div className="item-wrapper">
      <input
        type="checkbox"
        className="item-checkbox"
        defaultChecked={todoItem.completed ? "checked" : ""}
        onChange={() => changeItemChecked(todoItem.id)}
      />
      <span className="item-content">{todoItem.content}</span>
      <button
        className="item-btn item-delete"
        onClick={() => buttonClickHandler(todoItem.id, "delete")}
      >
        删除
      </button>
      <button
        className="item-btn item-edit"
        onClick={() => buttonClickHandler(todoItem.id, "edit")}
      >
        编辑
      </button>
      <button
        className="item-btn item-look"
        onClick={() => buttonClickHandler(todoItem.id, "look")}
      >
        查看
      </button>
    </div>
  );
}
