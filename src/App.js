import MyHeader from "./MyHeader";
import MyInput from "./MyInput";
import TodoItem from "./TodoItem";
import LookModal from "./Modal/LookModal";
import EditModal from "./Modal/EditModal";
import DeleteModal from "./Modal/DeleteModal";

import "./normalize.css";

import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";

function App() {
  let [isShowInput, setShowInput] = useState(false),
    [todoList, setTodoList] = useState([]),
    [isShowLookModal, setShowLookModal] = useState(false),
    [isShowEditModal, setShowEditModal] = useState(false),
    [isShowDeleteModal, setShowDeleteModal] = useState(false),
    [modalContent, setModalContent] = useState({});

  //初始化
  useEffect(() => {
    setTodoList(
      JSON.parse(localStorage.getItem("todoList"))
        ? JSON.parse(localStorage.getItem("todoList"))
        : []
    );
  }, []);

  const addCurrentItem = useCallback(
    (currentItem) => {
      console.log("currentItem ===", currentItem);
      setTodoList([
        ...todoList,
        { id: nanoid(), content: currentItem, completed: false },
      ]);
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...todoList,
          { id: nanoid(), content: currentItem, completed: false },
        ])
      );
      setShowInput(false);
    },
    [todoList]
  );

  const changeItemChecked = useCallback(
    (id) => {
      let newtodo = todoList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setTodoList(newtodo);
      localStorage.setItem("todoList", JSON.stringify(newtodo));
    },
    [todoList]
  );

  const buttonClickHandler = (id, type) => {
    if (type === "look") {
      setShowLookModal(true);
    } else if (type === "edit") {
      setShowEditModal(true);
    } else {
      setShowDeleteModal(true);
    }

    let currentItem = todoList.filter((item) => item.id === id)[0];
    console.log(currentItem);
    setModalContent(currentItem);
  };

  const lookClickHandler = () => {
    setShowLookModal(false);
  };

  const editClickHandler = (val, id) => {
    console.log(val);
    let newToDoList = todoList.map((item) => {
      if (item.id === id) {
        return { id, content: val.textareaInput, completed: val.checkboxInput };
      }
      return item;
    });
    console.log("newToDoList", newToDoList);
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
    setShowEditModal(false);
  };

  const deleteClickHandler = (id) => {
    let newToDoList = todoList.filter((item) => item.id !== id);
    setTodoList(newToDoList);
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
    setShowDeleteModal(false);
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <MyHeader setShowInput={() => setShowInput(!isShowInput)} />
      <MyInput isShowInput={isShowInput} addCurrentItem={addCurrentItem} />
      {todoList &&
        todoList.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              changeItemChecked={changeItemChecked}
              buttonClickHandler={buttonClickHandler}
            />
          );
        })}
      <LookModal
        isShowLookModal={isShowLookModal}
        modalContent={modalContent}
        lookClickHandler={lookClickHandler}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        modalContent={modalContent}
        editClickHandler={editClickHandler}
      />
      <DeleteModal
        isShowDeleteModal={isShowDeleteModal}
        modalContent={modalContent}
        deleteClickHandler={deleteClickHandler}
      />
    </div>
  );
}

export default App;
