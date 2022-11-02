import PropTypes from 'prop-types';

import {
  OptionsList,
  OptionsItem,
  OptionsButton,
} from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {Object.keys(options).map(btnName => {
        return (
          <OptionsItem key={btnName}>
            <OptionsButton type="button" onClick={onLeaveFeedback}>
              {btnName}
            </OptionsButton>
          </OptionsItem>
        );
      })}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
