import { Meta, StoryFn } from '@storybook/react';
import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'components/TextField',
  component: TextField,
  argTypes: {},
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const Base = Template.bind({});

Base.args = {
  name: 'Textfield',
  label: 'TextField',
  placeholder: 'TextField',
} as TextFieldProps;
