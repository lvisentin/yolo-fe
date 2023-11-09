import { Meta, StoryFn } from '@storybook/react';
import { Label, LabelProps } from './Label';

export default {
  title: 'components/Label',
  component: Label,
  argTypes: {},
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Base = Template.bind({});

Base.args = {
  name: 'Label',
  label: 'Label',
} as LabelProps;
