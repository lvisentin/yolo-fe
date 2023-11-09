import React from 'react';

export interface LabelProps {
  name: string;
  label: string;
}

export function Label({ name, label }: LabelProps) {
  return (
    <label className="label" htmlFor={name}>
      <span className="label-text">{label}</span>
    </label>
  );
}
