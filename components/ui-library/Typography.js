import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

const Typography = ({ header, children, green, ...props }) => {
  return (
    <StyledTypography
      header={header}
      green={green}
      style={{ width: props.fullWidth ? '100%' : undefined }}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.Text`
  font-weight: ${(props) =>
    props.header || props.bold ? 'bold' : 'normal'};
  font-size: ${(props) =>
    props.header && !props.bold ? '24px' : '14px'};
  color: ${(props) => props.green && Colors.limeGreen};
`;

export default Typography;
