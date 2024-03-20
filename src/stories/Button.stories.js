import { fn } from '@storybook/test';
import { Button } from './Button';
import { Header } from '../components/Header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Header,

};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};


