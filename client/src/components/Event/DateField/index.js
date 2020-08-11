import React from 'react';
import DatePicker from 'react-datepicker/es';
import "react-datepicker/dist/react-datepicker.css";
import {useField, useFormikContext} from 'formik';

 const Picker = ({ ...props })=>{

  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
      <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={val => {
            setFieldValue(field.name,val);
          }}

      />
  );

}
export default Picker;

