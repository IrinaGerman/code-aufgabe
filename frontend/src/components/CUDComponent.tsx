import { FormEvent, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './forms/Form';
import axios, { AxiosResponse } from 'axios';
import formOptions from './forms/formOptions.json';
import { IFormData, PageOptions } from '../types/types';

type Props = {
  pageOptions: PageOptions;
};

const CUDComponent = ({ pageOptions }: Props) => {
  const [reqData, setReqData] = useState<IFormData>({
    cityName: '',
    count: '',
  });
  const [isInputReset, setInputReset] = useState<boolean>(false);
  const inputReset = { isInputReset, setInputReset };

  const apiUrl: string = import.meta.env.VITE_APP_SERVER_URL;

  useEffect(() => {
    const CUDCity = async (data: IFormData) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let response: AxiosResponse<any, any>;
      if (pageOptions.page === 'create') {
        response = await axios.post(`${apiUrl}/cities/new-city`, {
          ...data,
        });
      } else if (pageOptions.page === 'update') {
        response = await axios.put(
          `${apiUrl}/cities/update-city/${data.cityName}`,
          {
            ...data,
          }
        );
      } else if (pageOptions.page === 'delete') {
        response = await axios.delete(
          `${apiUrl}/cities/delete-city/${data.cityName}`
        );
      }

      const notify = () => toast(response.data.message);
      notify();
    };
    reqData.cityName && CUDCity(reqData);
  }, [reqData]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const cityName = String(formData.get(formOptions[0].shortName)).trim();
    const count = String(formData.get(formOptions[1].shortName)).trim();

    if (!cityName) {
      const notify = () => toast('City name is required');
      notify();
    } else if (pageOptions.page !== 'delete' && !count) {
      const notify = () => toast('Count is required');
      notify();
    } else {
      setReqData({ cityName, count });
      setInputReset(true);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='h-screen pt-[5.5rem] flex justify-center'>
        <div className='h-[24rem] lg:h-[30rem] lg:w-[38rem] w-[30rem] pb-10 bg-gray-blue shadow-3xl rounded-lg'>
          <div className='w-full h-full flex justify-center items-center'>
            <Form
              options={
                pageOptions.page === 'delete'
                  ? formOptions.slice(0, 1)
                  : formOptions
              }
              title={pageOptions.title}
              inputReset={inputReset}
              handleSubmit={handleSubmit}
            ></Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CUDComponent;
