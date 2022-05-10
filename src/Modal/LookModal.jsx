import CommonModal from "./CommonModal";

export default function LookModal(props) {
  const { isShowLookModal, modalContent, lookClickHandler } = props;

  return isShowLookModal ? (
    <div>
      <CommonModal
        title="查看"
        isShowLookModal={isShowLookModal}
        buttonName="关闭"
        lookClickHandler={lookClickHandler}
      >
        <p>
          <textarea
            cols="30"
            rows="5"
            style={{
              disable: "true",
              border: "1px solid #888",
              borderRadius: "10px",
            }}
            disabled={true}
            defaultValue={modalContent.content}
          ></textarea>
        </p>
        <p>
          <input
            type="checkbox"
            defaultChecked={modalContent.completed ? true : false}
            disabled={true}
          />
          <label>{modalContent.completed ? "已完成" : "未完成"}</label>
        </p>
      </CommonModal>
    </div>
  ) : null;
}
