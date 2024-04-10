import { useEffect, useRef } from 'react';
import ImgBase from '/img/Brezel.webp';
import Dist from '/img/overlay.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hoverEffect from 'hover-effect';

type Props = {
  image: string;
};

const Distortion = ({ image }: Props) => {
  const imgSection = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    if (!hoverRef.current) {
      hoverRef.current = new hoverEffect({
        parent: imgSection.current,
        intensity: 0.3,
        image1: image,
        image2: ImgBase,
        displacementImage: Dist,
        imagesRatio: 0.7,
      });
    }
  }, []);

  return (
    <>
      <div ref={imgSection} className='w-[24rem] md:w-[28rem] h-[24rem] lg:w-[30rem] lg:h-[30rem] md:h-[28rem]'></div>
    </>
  );
};

export default Distortion;
