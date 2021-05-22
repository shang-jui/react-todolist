import { useState } from 'react'

const TodoItem = ({ todo, handleEditInput, editValue, handleEditValue }) => {
  const [isEditing, setIsEditing] = useState(false)

  const editingTemplate = (
    <div>
      <input
        className="task-item-body-input"
        value={editValue}
        onChange={handleEditValue}
        type="text"
        placeholder="新增工作"
        onKeyDown={(e) => {
          console.log(e.key)
          if (e.key === 'Enter') {
            setIsEditing(false)
            handleEditInput(todo.id)
          } else if (e.key === 'Escape') {
            setIsEditing(false)
          }
        }}
      />
    </div>
  )

  const viewTemplate = (
    <div
      className="task-item-body"
      onDoubleClick={() => {
        setIsEditing(true)
      }}
    >
      <span className="task-item-body-text">{todo.title}</span>
    </div>
  )
  return <div className="task-item">{isEditing ? editingTemplate : viewTemplate}</div>
}

export default TodoItem
