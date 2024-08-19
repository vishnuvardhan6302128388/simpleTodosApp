// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteId} = props
  const {id, title} = itemDetails

  const deleting = () => {
    deleteId(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deleting}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
