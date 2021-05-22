const Footer = (props) => {
  const { remaining } = props
  return (
    <footer>
      <p>剩餘項目: {remaining}</p>
    </footer>
  )
}

export default Footer
