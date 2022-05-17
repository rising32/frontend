import React, { useState, useCallback, LegacyRef } from 'react';
import { PersonSvg } from '../../assets/svg';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface LabelInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  fieldRef: React.LegacyRef<HTMLInputElement>;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
}

const IconInput = ({ label, name, value, placeholder, onChange, fieldRef, disabled, ...rest }: LabelInputProps) => {
  return (
    <div className='flex w-full items-center bg-[#FAFAFA80] rounded-full py-2 px-4 text-white'>
      <PersonSvg className='h-4 w-4 stroke-white fill-white mr-2' />
      <input
        ref={fieldRef}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
        className='flex flex-1 bg-transparent text-center border-none focus:outline-none placeholder:text-white bg-clip-text'
      />
    </div>
  );
};

export default IconInput;
