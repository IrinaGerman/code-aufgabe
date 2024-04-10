import { useEffect, useState } from 'react';
import CityComponent from '../components/CityComponent';
import axios from 'axios';
import { ICity } from '../types/types';

type Params = {
  page: string;
};

const Home = () => {
  const [cities, setCities] = useState<ICity[] | []>([]);

  const apiUrl: string = import.meta.env.VITE_APP_SERVER_URL 
  const citiesUrl = `${apiUrl}/cities/all-cities/`;

  const params: Params = {
    page: '2',
  };

  useEffect(() => {
    const getCities = async () => {
      const response = await axios.get(`${citiesUrl}${params.page}`);
      console.log('response', params, response);

      setCities(response.data);
    };
    getCities();
  }, []);

  return (
    <>
      <div className='pt-[5rem] px-0 mx-auto 2xl:w-[80rem] xl:w-[70rem] lg:w-[60rem] sm:w-[48rem] '>
        <div className='px-0 w-full h-full'>
          {cities.map((el, ind) => (
            <CityComponent
              key={el.uuid}
              name={el.cityName}
              description='Lorem ipsum dolor sit'
              position={ind}
            ></CityComponent>
          ))}
        </div>
        <div className='flex justify-center mt-4'></div>
      </div>
    </>
  );
};

export default Home;
