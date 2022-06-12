import React from "react";
import style from "./todo.module.css";

function Todo(props) {
  const { title, description } = props.todo;
  const { id } = props;
  const handleClick = () => {
    props.onRemoveTodo(id);
  };
//   const handleDone = (id) => {
//     props.onDoneTodo(id);
//   };
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i class="fa fa-trash fa-2x"></i>
        </button>
        {/* <button className={style.btn} onClick={() => handleDone(id)}>
          Done
        </button> */}
      </div>
    </article>
  );
}

export default Todo;
