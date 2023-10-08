import * as React from 'react';

export interface ITextInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function TextInput (props: ITextInputProps) {
  return (
    <input className='text-input' onChange={props.onChange}/>
  );
}
