// Write your code here
import './index.css'

const TransactionItem = props => {
  const {initialTransactionsList, onDeleteTransaction} = props
  const {title, amount, type, id} = initialTransactionsList

  const onClickDeleteButton = () => {
    onDeleteTransaction(id, type, amount)
  }

  return (
    <div>
      <li className="list">
        <p>{title}</p>
        <p>Rs {amount}</p>
        <p>{type}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="image"
          />
        </button>
      </li>
    </div>
  )
}
export default TransactionItem
