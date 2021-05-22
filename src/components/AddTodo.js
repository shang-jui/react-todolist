import clsx from 'clsx'
const Addtodo = (props) => {
  const { inputValue, handleInputValue, handleAdd } = props
  return (
    <div className={clsx('add-todo', { active: inputValue.length > 0 })}>
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input id="add-todo-input" type="text" value={inputValue} onChange={handleInputValue} placeholder="新增工作" />
      </div>
      <div className="add-todo-action">
        <button className="btn-reset btn-add" onClick={handleAdd}>
          {' '}
          新增{' '}
        </button>
      </div>
    </div>
  )
}
export default Addtodo
