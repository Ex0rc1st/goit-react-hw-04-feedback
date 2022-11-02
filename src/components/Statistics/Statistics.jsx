import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

import { Item, Value } from './Statistics.styled.js';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const totalFeedback = total;
  const positiveValue = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <Item>
            <p>
              Good: <Value>{good}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Neutral: <Value>{neutral}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Bad: <Value>{bad}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Total: <Value>{totalFeedback}</Value>
            </p>
          </Item>
          <Item>
            <p>
              Positive feedback: <Value>{positiveValue}%</Value>
            </p>
          </Item>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
