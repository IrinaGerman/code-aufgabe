import { ChangeEventHandler, useState } from 'react';
import SearchIcon from '../svgLibrary/SearchIcon';
import useStore from '../../store/store';

const Search = () => {  
  const {inputValue, setInputValue } = useStore()
  const [error, setError] = useState('')
  
  const regex = /^[a-zA-Z-]*$/;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
    if (regex.test(value)) {
      setInputValue(value);
      setError('')
    } else {
      setError('Enter only letters and dashes');
      setInputValue('');
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  };    

  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
        <SearchIcon />
      </div>
      <input
        type='text'
        name='city'
        id='city'
        className='block w-full rounded-md border-0 py-1.5 pl-9 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-offset-dark-gray-blue sm:text-sm sm:leading-6'
        placeholder='Search all cities...'
        value={inputValue}
        onChange={handleChange}
      />
       {error && <div className='absolute text-red-600 text-sm mt-1 ml-3'>{error}</div>}
    </div>
  );
};

export default Search;
