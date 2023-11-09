import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DataTable, { DataTableColumn } from './DataTable';
import { Country } from '../../../types/Country';

const sampleColumns: DataTableColumn<keyof Country>[] = [
  {
    name: 'code',
    field: 'code',
  },
  {
    name: 'name',
    field: 'name',
  },
];

const sampleValues: Country[] = [
  {
    code: 'BR',
    name: 'Brazil',
  },
  {
    code: 'US',
    name: 'United States',
  },
];

describe('Datatable', () => {
  it('should render datatable with sampleValues', () => {
    render(<DataTable columns={sampleColumns} values={sampleValues} />);

    sampleColumns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });

    sampleValues.forEach((value) => {
      Object.values(value).forEach((data) => {
        expect(screen.getByText(data.toString())).toBeInTheDocument();
      });
    });
  });
});
