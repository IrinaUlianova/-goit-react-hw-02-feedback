import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className="feedback_list">
      {options.map(option => (
        <li key={option} className="feedback_item">
          <button type="submit" className="btn" onClick={onLeaveFeedback}>
            {/* {option.charAt(0).toUpperCase() + option.slice(1)} */}
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
