import CommonModal from "./CommonModal";

export default function DeleteModal(props) {
  const { isShowDeleteModal, modalContent, deleteClickHandler } = props;

  return isShowDeleteModal ? (
    <div>
      <CommonModal
        title="删除"
        isShowDeleteModal={isShowDeleteModal}
        buttonName="确认删除？"
        deleteClickHandler={() =>deleteClickHandler(modalContent.id)}
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
