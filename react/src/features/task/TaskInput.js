import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./TaskSlice";

function TaskInput() {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");
  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Please Type in"
      />
      <button>new</button>
    </form>
  );
}

export default TaskInput;
