import { useState } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

type Props = {
  to: string;
  children: string;
};

const CustomLink = ({ to, children }: Props) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (event: { type: string }) => {
    setIsHovered(event.type === 'mouseenter');
  };

  return (
    <div
      className={`m-4 hover:text-white ${isActive ? 'active' : ''}`}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <Link to={to}>{children}</Link>
      <div
        className={`${
          isHovered ? 'w-full' : 'w-0'
        } h-[1px]  bg-white transition-width duration-200`}
      ></div>
    </div>
  );
};

export default CustomLink;
