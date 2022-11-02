import PropTypes from 'prop-types';

import { TitleSection, Title } from './Section.styled.js';

export const Section = ({ title, children }) => {
  return (
    <TitleSection>
      <Title>{title}</Title>
      {children}
    </TitleSection>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
