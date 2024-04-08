import SearchIcon from './svgLibrary/SearchIcon';
import useInput from '../hooks/useInput';

type NameInput = {
  value: string;
  onChange: (e: {
    target: {
      value: string;
    };
  }) => void;
  reset: () => void;
};

const Search = () => {
  const nameInput: NameInput = useInput('');

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
        {...nameInput}
      />
    </div>
  );
};

export default Search;
