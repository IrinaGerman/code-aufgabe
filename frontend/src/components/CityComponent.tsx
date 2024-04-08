import Navbar from '../navigation/Navbar';
import { NaviOptions } from '../types/types';
import Distortion from './Distortion';

type Props = {
  image: string;
  name: string;
  description: string;
  position: number;
};

const options: NaviOptions[] = [
  { name: 'About', href: '', current: true },
  { name: 'History', href: '', current: false },
  { name: 'Culture', href: '', current: false },  
];

const CityComponent = ({ image, name, description, position }: Props) => {
  return (
    <div className='w-full md:h-[28rem] h-[24rem] lg:h-[30rem] pb-10'>
      <div className='relative w-full h-full flex flex-row overflow-hidden shadow-3xl rounded-lg'>
        <div
          className={`${
            position % 2
              ? ' justify-start order-first'
              : 'justify-end order-last'
          } flex h-full basis-1/2 bg-gray-blue `}
        >
          <Distortion image={image}></Distortion>
        </div>
        <div
          className={`${
            position % 2 ? 'order-last' : 'order-first'
          } h-full basis-1/2 bg-gray-blue`}
        >
          <div className='relative flex h-full flex-col justify-center items-center'>
            <div className='absolute top-2'><Navbar options={options}></Navbar></div>
            
            <div className='leading-tight text-black font-semibold text-[3.5rem]'>
              {name}
            </div>
            <div className='leading-tight text-black  text-[2.5rem] px-4  text-center'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityComponent;
