import { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import { validateCount, validateName } from '../../utils/validate';

type Props = {
  inputReset: { isInputReset: boolean; setInputReset: (arg0: boolean) => void };
  el: {
    name: string;
    shortName: string;
    type: string;
  };
};

const CustomInput = ({ el, inputReset }: Props) => {
  const { isInputReset, setInputReset } = inputReset;
  const input = useInput('');
  const [error, setError] = useState({ [el.shortName]: '' });

  useEffect(() => {
    if (isInputReset) {
      input.reset();
      setInputReset(false);
    }
  }, [isInputReset]);

  useEffect(() => {
    if (el.shortName === 'cityName') {
      const validName = validateName(input.value);
      setError((prev) => ({ ...prev, [el.shortName]: validName }));
    }
    if (el.shortName === 'count') {
      const validCount = validateCount(input.value);

      setError((prev) => ({
        ...prev,
        [el.shortName]: validCount,
      }));
    }
  }, [input.value]);

  useEffect(() => {    
  }, [error[el.shortName]]);

  return (
    <>
      <div key={el.shortName}>
        <label
          htmlFor={el.shortName}
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          {el.name}
        </label>
        <div className='mt-2'>
          <div
            className={` flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md`}
          >
            <input
              type={el.type}
              name={el.shortName}
              id={el.shortName}
              className={` ${
                error[el.shortName]
                  ? 'ring-red-600'
                  : ''
              } block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-offset-dark-gray-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
              placeholder={el.name}
              {...input.bind}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomInput;
