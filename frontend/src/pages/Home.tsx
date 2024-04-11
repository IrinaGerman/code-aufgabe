import { useEffect, useState } from 'react';
import CityComponent from '../components/CityComponent';
import axios from 'axios';
import { ICity } from '../types/types';
import useStore from '../store/store';
import LeftArrow from '../components/svgLibrary/leftArrow';
import RightArrow from '../components/svgLibrary/RightArrow';

const Home = () => {
  const [cities, setCities] = useState<ICity[] | []>([]);
  const [pages, setPages] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);
  const { inputValue } = useStore();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const apiUrl: string = import.meta.env.VITE_APP_SERVER_URL;

  useEffect(() => {
    const getPages = async () => {
      const response = await axios.get(`${apiUrl}/cities/all-pages`);
      setPages(response.data);
    };
    getPages();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      const response = await axios.get(
        `${apiUrl}/cities/all-cities/${curPage}`
      );
      setCities(response.data);
    };
    !inputValue && getCities();
  }, [pages, curPage, inputValue]);

  useEffect(() => {
    const handleInputChange = (str: string) => {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
        const response = await axios.get(
          `${apiUrl}/cities/some-cities/${str}/${1}`
        );
        setCities(response.data);
      }, 500);
      setTimer(newTimer);
    };
    setCurPage(1);
    inputValue && handleInputChange(inputValue);
  }, [inputValue]);

  const renderPaginationLinks = () => {
    const links = [];
    for (let i = 1; i <= pages - 1; i++) {
      links.push(
        <a
          key={i}
          href='#'
          className={`relative items-center w-[2rem] pt-2 text-center border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            curPage === i ? 'font-bold' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            setCurPage(i);
          }}
        >
          {i}
        </a>
      );
    }
    return links;
  };

  return (
    <>
      <div
        className={`pt-[5.5rem] px-0 mx-auto 2xl:w-[80rem] xl:w-[70rem] lg:w-[60rem] sm:w-[48rem] ${
          cities.length < 2 ? 'h-screen' : ''
        } `}
      >
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
        <div className='flex justify-center mt-4'>
          <nav className='relative z-0 inline-flex shadow-sm rounded-md'>
            <a
              href='#'
              className={`cursor-pointer ${
                curPage === 1 ? 'cursor-default' : ''
              } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
              onClick={() => setCurPage(curPage - 1)}
            >
              <LeftArrow></LeftArrow>
            </a>
            {renderPaginationLinks()}
            <a
              href='#'
              className={`cursor-pointer ${
                curPage === pages ? 'cursor-default' : ''
              } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
              onClick={(e) => {
                e.preventDefault();
                setCurPage(curPage + 1);
              }}
            >
              <RightArrow></RightArrow>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;
