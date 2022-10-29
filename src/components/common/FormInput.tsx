import { memo } from "react";
import { FieldRenderProps } from "react-final-form";

interface IFormInput extends FieldRenderProps<string> {
  label: string;
}

function FormInput({ label, input, meta, ...rest }: IFormInput): ReturnType<React.FC<IFormInput>> {
  return (
    <>
      <label>{label}</label>
      <input {...input} {...rest} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </>
  );
}

export default memo(FormInput);
