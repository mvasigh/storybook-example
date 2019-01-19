import React from 'react';

const Button = ({ children, large }) => (
  <button style={large ? { fontSize: '24px' } : {}}>{children}</button>
);

export default Button;
