import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    income: 0,
    balance: 0,
    expenses: 0,
    initialTransactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({type: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      title,
      id: uuidv4(),
      amount,
      type,
    }
    if (
      (newTransaction.title !== '' && newTransaction.amount !== '',
      newTransaction.type !== '')
    ) {
      this.setState(prevState => ({
        initialTransactionsList: [
          ...prevState.initialTransactionsList,
          newTransaction,
        ],
        title: '',
        amount: '',
      }))
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
  }

  onDeleteTransaction = (id, type, amount) => {
    const {initialTransactionsList} = this.state
    const filteredTransactions = initialTransactionsList.filter(
      eachList => eachList.id !== id,
    )
    this.setState({initialTransactionsList: filteredTransactions})
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        income: prevState.income - parseInt(amount),
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - parseInt(amount),
      }))
    }
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      initialTransactionsList,
    } = this.state
    console.log(type)
    return (
      <div className="main">
        <div className="bg-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="two-flex">
          <form className="form" onSubmit={this.onClickAdd}>
            <h1 className="add-transaction">Add transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              placeholder="TITLE"
              id="title"
              value={title}
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              placeholder="AMOUNT"
              id="amount"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <br />
            <label htmlFor="options">TYPE</label>
            <br />
            <select
              id="options"
              className="option"
              value={type}
              onChange={this.onChangeSelect}
            >
              {transactionTypeOptions.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.displayText}
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Add</button>
          </form>
          <div className="history-list">
            <h1 className="history">History</h1>
            <div className="flex-row">
              <p>TITLE</p>
              <p>AMOUNT</p>
              <p>TYPE</p>
            </div>
            <ul className="flex-row-list">
              {initialTransactionsList.map(eachList => (
                <TransactionItem
                  initialTransactionsList={eachList}
                  key={eachList.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
