import React from 'react';

import { Container, Input, Label } from './styles';

function CheckBox({ children, name, ...rest }) {
  return (
      <Container>
            <Input type="checkbox" name={name} {...rest} />
            <Label for={name}>{children}</Label>
      </Container>
  );
}

export default CheckBox;