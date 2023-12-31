import { ChangeEvent } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';

export interface TextFieldProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
    <div className="form-control relative w-full">
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
