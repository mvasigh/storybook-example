import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => <Button>Click me!</Button>)
  .add('large', () => <Button large>Click me!</Button>);
