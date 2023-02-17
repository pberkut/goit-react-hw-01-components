import PropTypes from 'prop-types';
import { TransactionHistoryTable, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <TableRow key={id} index={idx}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
