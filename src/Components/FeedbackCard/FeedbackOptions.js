import PropTypes from 'prop-types';

export default function Button({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            className="App-button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

Button.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
