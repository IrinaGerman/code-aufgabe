import Search from '../components/Search';
import Navbar from '../navigation/Navbar';
import { NaviOptions } from '../types/types';

const options: NaviOptions[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Create', href: '/create', current: false },
  { name: 'Update', href: '/update', current: false },
  { name: 'Delete', href: '/delete', current: false },
];

const Header = () => {
  return (
    <>
      <div className='h-12 px-8 bg-gray-blue flex items-center justify-between shadow-3xl'>
        <h2 className='font-semibold'>LOGO</h2>
        <div className='flex items-center'>
          <Navbar options={options}></Navbar>
          <Search></Search>
        </div>
      </div>
    </>
  );
};

export default Header;
