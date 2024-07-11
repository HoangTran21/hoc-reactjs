import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './Todo/components/TodoList';

TodoFeature.propTypes = {
    todoList : PropTypes.array,
};

TodoFeature.defaultProps = {
    todoList : [],
};
function TodoFeature(props) {
    const initTodoList = [
    {
        id: 1,
        title: 'Football',
        status: 'new',
    },
    {
        id: 2,
        title: 'Swimming',
        status: 'old',
    },
    {
        id: 3,
        title: 'Running',
        status: 'new',
    },
]
    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick =(todo, idx) => {
        console.log(todo, idx);
    }
    return (
        <div>
           <h3>Todo List</h3>
           <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;
