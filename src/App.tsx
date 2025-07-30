import { useState, useEffect } from 'react';
import CheckboxRowSelectionDemo from "./components/Table";
import BasicPagination from './components/Paginotor';
import type { Artwork } from './type';


function App() {
  const [page, setPage] = useState(1);         
  const [data, setData] =  useState<Artwork[]>([]);        

  const fetchdata = async (page:number):Promise<{ data: Artwork[] }> => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
    const jsondata = await response.json();
    return jsondata;
  };

  useEffect(() => {
   const getdata = async ()=> {
    const getdata = await fetchdata(page);
    setData(getdata.data);
   };

   getdata();
   
  }, [page]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="border border-gray-300 p-4 shadow rounded bg-white">
       <CheckboxRowSelectionDemo data={data} fetchdata = {fetchdata} setData = {setData} setPage = {setPage} page = {page}/>
      </div>
      
      <div className="-my-28">
       <BasicPagination page={page} setPage={setPage} />
      </div>
      
      
    </div>
  );
}

export default App;
