import CUDComponent from "../components/CUDComponent";

const pageOptions = {
  page: 'create',
  title:  'Create new city',
}

const Create = () => {
 return (
  <CUDComponent pageOptions={pageOptions}></CUDComponent>
 )
};

export default Create;
