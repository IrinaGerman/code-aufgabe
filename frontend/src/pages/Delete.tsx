
import CUDComponent from '../components/CUDComponent';

const pageOptions = {
  page: 'delete',
  title: 'Delete city', 
}

const Delete = () => {
  
  return (
    <CUDComponent pageOptions={pageOptions}></CUDComponent>
   )
  };

export default Delete;
