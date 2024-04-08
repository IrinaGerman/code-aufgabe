import { useState } from 'react';

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: { target: { value: string; }; }) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(initialValue)
  };
}

export default useInput;