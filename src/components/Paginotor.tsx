import * as React from 'react';
import { useEffect , useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({page,setPage}) {

    
    
    console.log("inside App.tsx page value>> "+ page);
    const handleChange = (e,value)=>{
      
      setPage(value);
    //   console.log("current page " + value)
    }
  return (
    <div className="flex justify-center">
        <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </Stack>
    </div>
    
  );
}