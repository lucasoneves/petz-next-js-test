import { EventHandler, ReactEventHandler } from "react";
import styles from "../NewScheduleComponent/NewSchedule.module.scss";
import selectStyles from './Select.module.scss';
type SelectType = {
  placeholder: string;
  id: string;
  fieldName: string;
  change: ReactEventHandler;
  city?: boolean;
  data: { name: string; url: string }[]; // Ensure required properties
};
export default function Select({ placeholder, id, fieldName, change, data, city }: SelectType) {
  return (
    <select
      className={`${styles["field"]} ${selectStyles['select']}`}
      placeholder={placeholder}
      id={id}
      name={fieldName}
      onChange={(e) => change(e)}
    >
      <option value="Selecione">{placeholder}</option>
      {data.map((field) => (
        <option key={field.name} value={city ? field.url : field.name}>
          {field.name.replace(/-/g, ' ')}
        </option>
      ))}
    </select>
  );
}
