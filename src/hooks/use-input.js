import { useState } from 'react';



// state, setState, handleChange
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, handleValueChange];
};

const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, handleChange];
};

export default useInput;
