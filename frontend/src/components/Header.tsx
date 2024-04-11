import Search from './forms/Search';
import Navbar from '../navigation/Navbar';
import headerNavbar from '../assets/navbar/headerNavbar.json'

const Header = () => {
  return (
    <>
      <div className='absolute h-12 w-full px-8 bg-gray-blue flex items-center justify-between shadow-3xl'>
        <h2 className='font-semibold'>LOGO</h2>
        <div className='flex items-center'>
          <Navbar options={headerNavbar}></Navbar>
          <Search></Search>
        </div>
      </div>
    </>
  );
};

export default Header;
