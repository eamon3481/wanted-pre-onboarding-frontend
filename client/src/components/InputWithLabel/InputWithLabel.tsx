import React, { InputHTMLAttributes } from 'react';
import * as S from './InputWithLabel.style';

const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, ...textInputProps } = props;

  return (
    <S.Label>
      {label}
      <input {...textInputProps} />
    </S.Label>
  );
};

export default InputWithLabel;

type InputWithLabelProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;
