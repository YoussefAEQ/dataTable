
import DataTable from './compenent/DataTable';
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 40,
  },
  {
    accessorKey: 'culture',
    header: 'Culture',
    size: 120,
  },
  {
    accessorKey: 'variety',
    header: 'Variety',
    size: 120,
  },
  {
    accessorKey: 'batch_number',
    header: 'Number Lot',
    size: 300,
  },
  {
    accessorKey: 'N_batch',
    header: 'Number Batch ',
  },
  {
    accessorKey: 'number_of_cells_per_tray',
    header: 'Number of Cells per tray',
  },
  {
    accessorKey: 'days_after_sowing',
    header: 'Day after sowing',
  },
  {
    accessorKey: 'hea',
    header: 'hea',
  },
  {
    accessorKey: 'country',
    header: 'Country',
    size: 220,
  }
];

const App = ({}) => {
//   const [dataOfPreduction , setDataOfPreduction] = useState([]);

//   useEffect(() => {
//     getData();
// }, []);

// const getData = async () => {
//   try {
//       const res = await axios.get(`http://127.0.0.1:8000/api/predictions`, {
//         headers: {
//           Authorization: `Bearer 2360|x4H9272dXhU5p47ZG90UPFVrgc3x5FKjxycIrkH7`,
//         },
//       });
//       if (res.status == 200) {
//         setDataOfPreduction(res.data.predictions);
//       }
//     } catch (error) {
//       setDataOfPreduction([]);
//     }
// };
const data = [
  {
    id: 1,
    culture: 'Wheat',
    variety: 'Red Wheat',
    batch_number: 'B1234',
    N_batch: 'NB123',
    number_of_cells_per_tray: 24,
    days_after_sowing: 10,
    hea: 'HEA123',
    country: 'USA'
  },
  {
    id: 2,
    culture: 'Corn',
    variety: 'Yellow Corn',
    batch_number: 'B5678',
    N_batch: 'NB456',
    number_of_cells_per_tray: 36,
    days_after_sowing: 15,
    hea: 'HEA456',
    country: 'Canada'
  },
  // Add more data objects as needed
];
  
  return (
    <div>
      <DataTable   columns = {columns} data={data}  />
    </div>
  )
  
};

export default App;
//dateCulturevarietenum_de_lotnumber_batchedate_semisActual_agenombre de grainesPlantes commandéesjour_apres_semispourcentage_germinationpourcentage_totaldeviationnumero_commandeclientfournisseur