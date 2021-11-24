import { useState } from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = event => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  return [values, handleChanges, resetForm, setValues];
};
