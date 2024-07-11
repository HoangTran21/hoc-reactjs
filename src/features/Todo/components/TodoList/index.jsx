import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList : PropTypes.array,
    onTodoClick : PropTypes.func,
};

TodoList.defaultProps = {
    todoList : [],
    onTodoClick : null,
};

function TodoList({todoList}) {
    const handleTodoClick =(todo, idx)=>{
        if(!onTodoClick) return;

        onTodoClick(todo, idx);
    }
    return (    
        <ul className='todo-List'>
            {
                todoList.map((todo,idx) => (
                    <li key={todo.id} className={classNames({
                        'todo-item':true,
                        old :todo.status ==='old'
                    })}
                    onClick={() => handleTodoClick(todo,idx)}
                    >{todo.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoList;
