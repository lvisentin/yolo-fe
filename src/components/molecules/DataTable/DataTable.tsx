import { Country } from '../../../types/Country';

export type DataTableColumn<T extends keyof Country> = {
  name: string;
  field: T;
};

export interface DataTableProps {
  columns: DataTableColumn<keyof Country>[];
  values: Country[];
}

export function DataTable({ columns, values }: DataTableProps) {
  return (
    <div className="overflow-y-auto max-h-80 w-full">
      <table className="table w-full" role="table">
        <thead>
          <tr role="row">
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr role="row" key={index}>
              {columns.map((column, index) => (
                <td key={index}>{value[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
