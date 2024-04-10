import { NaviOptions } from '../types/types';
import CustomLink from './CustomLink';

const Navbar = ({options}:  {options : NaviOptions[]}) => {
    
  return (
    <>
    <div className='flex items-center'>
      {options.map((el: NaviOptions ) => (
        <CustomLink key={el.name} to={el.href}>
          {el.name}
        </CustomLink>
      ))}
    </div>
    </>
  );
};

export default Navbar;
