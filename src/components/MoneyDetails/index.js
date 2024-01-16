// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, income, expenses} = this.props
    return (
      <div>
        <ul>
          <li className="balance">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
            <div>
              <p className="your-balance">Your Balance</p>
              <p className="count" data-testid="balanceAmount">
                Rs {balance}
              </p>
            </div>
          </li>
          <li className="income">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
            <div>
              <p className="your-income">Your Income</p>
              <p className="count" data-testid="incomeAmount">
                Rs {income}
              </p>
            </div>
          </li>
          <li className="expenses">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
            <div>
              <p className="your-expenses">Your Expenses</p>
              <p className="count" data-testid="expensesAmount">
                Rs {expenses}
              </p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default MoneyDetails
