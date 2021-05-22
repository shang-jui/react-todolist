const Header = ({ handleAllDelete }) => {
  return (
    <header>
      <h3>Tasks</h3>
      <button style={{ float: 'right' }} onClick={handleAllDelete}>
        刪除已完成項目
      </button>
    </header>
  )
}
export default Header
