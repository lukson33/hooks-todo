import React from "react";
import UseFormState from "./hooks/UseFormState";
import TextField from "@material-ui/core/TextField";

export default function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = UseFormState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}
