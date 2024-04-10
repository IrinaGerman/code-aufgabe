import Search from '../components/Search';
import Navbar from '../navigation/Navbar';
import headerNavbar from '../assets/navbar/headerNavbar.json'

const Header = () => {
  return (
    <>
      <div className='h-12 px-8 bg-gray-blue flex items-center justify-between shadow-3xl'>
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
