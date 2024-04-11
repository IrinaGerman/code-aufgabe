import React, { FormEvent } from 'react';
import CustomInput from './CustomInput';

type Props = {  
  title: string;
  inputReset:{isInputReset : boolean, setInputReset: (arg0: boolean)=> void}              
  options: {
    name: string;
    shortName: string;
    type: string;
  }[];
  handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
};

const Form = ({  title, options, handleSubmit, inputReset }: Props) => {
    
  return (
    <form onSubmit={handleSubmit}>
      <div className='h-full w-[26rem] grid grid-cols-1 gap-4 place-content-center'>
        <h2 className='font-semibold text-[3rem] text-center'>{title}</h2>
        {options.map((el) => <CustomInput key={el.shortName} el={el} inputReset={inputReset} ></CustomInput>)}
        <button
          type='submit'
          className='rounded-md mt-8 bg-dark-gray-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cemidark-gray-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;

