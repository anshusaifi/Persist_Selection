import { useState, useEffect } from "react";
import { ChevronDown, CurrencyIcon } from "lucide-react";
import BasicPagination from "./Paginotor";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import Overlay from "./Overlay";

export default function CheckboxRowSelectionDemo({ data , fetchdata , setData , setPage , page}) {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(false);
  const [showOverlay , setShowOverlay] = useState(false);

  function handleOverlay(){
    setShowOverlay(prev=>!prev);
    
  }
 
  const fetchExtraSelectRows = async (count) => {
    console.log("inside fetchExtraSeletRows")
    let allRows = [...data];
    console.log("allRows>> ",allRows)
    console.log("count", count)

    let currentPage = page;
    console.log(currentPage  , "current poage inside table")

    while (allRows.length < count) {
      currentPage += 1;
      const PageData = await fetchdata(currentPage);
      const newPageData = PageData.data;
      if (newPageData.length === 0) break; 
      allRows = [...allRows, ...newPageData];
    }

    setData(allRows);
    setPage(currentPage);
    setSelectedProducts(allRows.slice(0, count));
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-5xl">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          {/* <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} /> */}
          {/* <label htmlFor="input-rowclick">Row Click</label> */}
        </div>
        <DataTable
          value={data}
          selectionMode={rowClick ? null : "checkbox"}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column
            field="id"
            header={
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-semibold">Code</span>
                <ChevronDown size={16} onClick={handleOverlay} />
              </div>
            }
          ></Column>
          <Column field="title" header="Name"></Column>
          <Column field="classification_title" header="Category"></Column>
          <Column field="date_start" header="Start Date"></Column>
          <Column field="date_end" header="End Date"></Column>
        </DataTable>
        <br />
        {
          showOverlay ? <Overlay setSelectedProducts={setSelectedProducts} setShowOverlay={setShowOverlay} data={data} fetchExtraSelectRows = {fetchExtraSelectRows}/> : ""
        }
      </div>
    </div>
  );
}
