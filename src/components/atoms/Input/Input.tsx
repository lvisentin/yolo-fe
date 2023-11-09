import { ChangeEvent } from 'react';

export interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  id: string;
  name: string;
}

export function Input({ value, onChange, placeholder, id, name }: InputProps) {
  return (
    <input
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="input input-bordered w-full"
    />
  );
}
