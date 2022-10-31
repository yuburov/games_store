import { memo } from "react";
import { Field } from "react-final-form";
import SelectInput, { ISelectedItem } from "../../common/SelectInput";
import { Ages } from "../../../constants/filterFormEnum";
import style from "./editCardForm.module.scss";

const items: ISelectedItem[] = [
  { key: 1, value: Ages.Three },
  { key: 2, value: Ages.Six },
  { key: 3, value: Ages.Twelve },
  { key: 4, value: Ages.Sixteen },
  { key: 5, value: Ages.Eighteen },
];

function AgesField(): ReturnType<React.FC> {
  return (
    <div className={style.field}>
      <Field className={style.select} title="Age" items={items} name="ageLimit" component={SelectInput} />
    </div>
  );
}

export default memo(AgesField);
