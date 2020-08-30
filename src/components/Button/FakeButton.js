import React from 'react';
import PropTypes from 'prop-types';

import { btnStyles } from '../../styles';

export default function FakeButton({ children }) {
  return (
    <button type='button' css={btnStyles}>
      <span>{children && children}</span>
    </button>
  );
}

FakeButton.propTypes = {
  children: PropTypes.node.isRequired,
};
