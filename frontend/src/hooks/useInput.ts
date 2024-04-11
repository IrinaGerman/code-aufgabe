import { useState } from 'react';

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: { target: { value: string; }; }) => {
    setValue(e.target.value);
  };

  return {
    bind: {
      value,
      onChange: handleChange
    },
    value,
    reset: () => setValue('')
  };
}

export default useInput;