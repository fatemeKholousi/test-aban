import React, { useEffect, useState } from "react";
import {makeData} from './assets/creators'
import PaginatedTable from "./components/PaginatedTable";

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const res = makeData(50);
    setDataTable(res);
  }, []);



  return (<div style={{
    top: 0,
    bottom: 0,
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,}}>
        <PaginatedTable dataTable={dataTable}/>
  </div>)

}

export default App;
