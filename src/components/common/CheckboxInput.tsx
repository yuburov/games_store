import React from "react";
import { FieldRenderProps } from "react-final-form";

interface ICheckboxInput extends FieldRenderProps<boolean> {
  title: string;
}

function CheckboxInput({ title, input: { value, ...input } }: ICheckboxInput): ReturnType<React.FC<ICheckboxInput>> {
  return (
    <>
      <span>{title}</span>
      <input {...input} type="checkbox" checked={value} />
    </>
  );
}

export default CheckboxInput;
