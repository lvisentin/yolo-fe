import { Meta, StoryFn } from '@storybook/react';
import { DataTable, DataTableProps } from './DataTable';

export default {
  title: 'components/DataTable',
  component: DataTable,
  argTypes: {},
} as Meta<typeof DataTable>;

const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />;

export const Base = Template.bind({});

Base.args = {
  columns: [
    {
      field: 'code',
      name: 'Código',
    },
    {
      field: 'name',
      name: 'Nome',
    },
  ],
  values: [
    {
      code: 'BR',
      name: 'Brazil',
    },
  ],
} as DataTableProps;
