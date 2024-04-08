import ImgCity from '../assets/img/Studgart.jpg';
import CityComponent from '../components/CityComponent';
import cities from '../assets/cities.json';

const Home = () => {
  const citiesArr = [...cities].slice(0, 5);
  console.log(citiesArr);

  return (
    <>
      <div className='pt-[5rem] px-0 mx-auto 2xl:w-[80rem] xl:w-[70rem] lg:w-[60rem] sm:w-[48rem] '>
        <div className='px-0 w-full h-full'>
          {citiesArr.map((el, ind) => (
            <CityComponent
              key={el.uuid}
              name={el.cityName}
              description='Lorem ipsum dolor sit'
              image={ImgCity}
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
