import { FieldRenderProps } from "react-final-form";

interface ITextAreaInput extends FieldRenderProps<string> {
  label: string;
}

export default function TextAreaInput({ label, input, ...rest }: ITextAreaInput): ReturnType<React.FC<ITextAreaInput>> {
  return (
    <>
      <label>{label}</label>
      <textarea {...input} {...rest} />
    </>
  );
}
