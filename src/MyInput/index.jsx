import { useRef } from "react";

import "./index.css";

export default function MyInput(props) {
  const { isShowInput, addCurrentItem } = props,
    currentInput = useRef();
  return isShowInput ? (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="请输入待办项"
        className="input-search"
        ref={currentInput}
      />
      <button
        className="input-add"
        onClick={() => addCurrentItem(currentInput.current.value)}
      >
        添加
      </button>
    </div>
  ) : null;
}
