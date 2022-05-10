import CommonModal from "./CommonModal";
import { useRef } from "react";

export default function EditModal(props) {
  const { isShowEditModal, modalContent, editClickHandler } = props,
    textareaInput = useRef(),
    checkboxInput = useRef();
  return isShowEditModal ? (
    <div>
      <CommonModal
        title="编辑"
        isShowEditModal={isShowEditModal}
        buttonName="保存"
        editClickHandler={() =>
          editClickHandler(
            {
              textareaInput: textareaInput.current.value,
              checkboxInput: checkboxInput.current.checked,
            },
            modalContent.id
          )
        }
      >
        <p>
          <textarea
            cols="30"
            rows="5"
            style={{
              border: "1px solid #888",
              borderRadius: "10px",
            }}
            defaultValue={modalContent.content}
            ref={textareaInput}
          ></textarea>
        </p>
        <p>
          <input
            type="checkbox"
            defaultChecked={modalContent.completed ? true : false}
            ref={checkboxInput}
          />
          <label>{modalContent.completed ? "已完成" : "未完成"}</label>
        </p>
      </CommonModal>
    </div>
  ) : null;
}
