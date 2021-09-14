import PropTypes from 'prop-types';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="list">
      <li className="list-items">Good: {good}</li>
      <li className="list-items">Neutral: {neutral}</li>
      <li className="list-items">Bad: {bad}</li>
      <li className="list-items">Total: {total}</li>
      <li className="list-items">
        Positive feedback: {positivePercentage || 0}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
