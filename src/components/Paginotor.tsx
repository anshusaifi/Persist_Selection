
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function BasicPagination({page,setPage}:Props) {

    
    
    console.log("inside App.tsx page value>> "+ page);
    const handleChange = (_e: React.ChangeEvent<unknown>, value: number)=>{
      
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