import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    handleChangeProps, deleteTodoProps, setUpdate, todos,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;

TodosList.propTypes = {
  handleChangeProps: PropTypes.node.isRequired,
  deleteTodoProps: PropTypes.node.isRequired,
  setUpdate: PropTypes.node.isRequired,
  todos: PropTypes.node.isRequired,
};
