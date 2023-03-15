import {
  calculateSpent,
  formatCurrency,
  formatPercentage,
} from '../../utils/helpers';

const BudgetItem = ({ budget }) => {
  const { name, _id, color, amount } = budget;

  const spent = calculateSpent(_id);
  console.log(spent);

  return (
    <div
      className='budget'
      style={{
        '--accent': color,
      }}
    >
      <div className='progress-text'>
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className='progress-text'>
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)}</small>
      </div>
    </div>
  );
};
export default BudgetItem;
