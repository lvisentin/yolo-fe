
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { SyntheticEvent } from 'react';

export interface TextFieldProps {
  onChange?: (e: SyntheticEvent) => void;
  value: string;
  placeholder: string;
  label: string;
  id: string;
  name: string;
}

export function TextField({
  value,
  onChange,
  label,
  placeholder,
  id,
  name,
}: TextFieldProps) {
  return (
    <div className="form-control relative">
      <Label label={label} name={name} />
      <Input
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
