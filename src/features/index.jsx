import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './Todo/components/TodoList';

TodoFeature.propTypes = {
    todoList : PropTypes.array,
};

TodoFeature.defaultProps = {
    todoList : [],
};
function TodoFeature(props) {
    const todoList = [
    {
        id: 1,
        title: 'Football'
    },
    {
        id: 2,
        title: 'Swimming'
    },
    {
        id: 3,
        title: 'Running'
    },
]
    return (
        <div>
           <h3>Todo List</h3>
           <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;
