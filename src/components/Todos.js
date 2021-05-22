// import clsx from 'clsx'
import TodoItem from './Todo'

const Todos = ({ todos, handleDelete, handleConfirm, handleEdit, handleEditInput, editValue, handleEditValue }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
            handleEditInput={handleEditInput}
            editValue={editValue}
            handleEditValue={handleEditValue}
          />
        )
      })}
    </div>
  )
}
export default Todos
