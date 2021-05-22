import clsx from 'clsx'
import TodoItem from './TodoItem'

const Todo = ({ todo, handleDelete, handleConfirm, handleEditInput, editValue, handleEditValue }) => {
  return (
    <div className={clsx('task-item', { done: todo.isDone })}>
      <div className="task-item-checked" onClick={() => handleConfirm(todo.id)}>
        <span className="icon icon-checked"></span>
      </div>
      <TodoItem todo={todo} handleEditInput={handleEditInput} editValue={editValue} handleEditValue={handleEditValue} />
      <div className="task-item-action">
        <button className="btn-reset btn-destroy icon" onClick={() => handleDelete(todo.id)}>
          {' '}
        </button>
      </div>
    </div>
  )
}
export default Todo
