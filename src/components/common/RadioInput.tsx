import { FieldRenderProps } from "react-final-form";
import { IFilterFormValues } from "../../types/FilterForm";

export interface IRadioInput extends IFilterFormValues, FieldRenderProps<string> {
  label: string;
}

function RadioInput({ input, meta, label, ...rest }: IRadioInput): ReturnType<React.FC<IRadioInput>> {
  return (
    <>
      <input type="radio" {...input} {...rest} />
      <label>{label}</label>
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </>
  );
}

export default RadioInput;
