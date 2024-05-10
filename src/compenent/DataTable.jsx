import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';
import { IconEdit, IconSend, IconTrash } from '@tabler/icons-react';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Box, Button ,ActionIcon} from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { jsPDF } from 'jspdf'; 
import autoTable from 'jspdf-autotable'; 
import { mkConfig, generateCsv, download } from 'export-to-csv';
import "../App.css"
import { ChevronDown, Filter } from 'lucide-react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from 'react';


const DataTable = ({data,columns}) => {
  const[dataT,setDataT]=useState(data);
    const handleExportRowsPdf = (rows) => {
        // // Check if any rows are selected
        // if (Array.isArray(rows) && rows.length > 0) {
        //   const doc = new jsPDF();
        //   const tableData = rows.map((row) => Object.values(row.original));
        //   const tableHeaders = columns.map((c) => c.header);
      
        //   autoTable(doc, {
        //     head: [tableHeaders],
        //     body: tableData,
        //   });
      
        //   doc.save('mrt-pdf-example.pdf');
        // } else {
        //   // If no rows are selected, export all rows from the original data
        //   const doc = new jsPDF();
        //   const tableData = data.map((row) => Object.values(row));
        //   const tableHeaders = columns.map((c) => c.header);
      
        //   autoTable(doc, {
        //     head: [tableHeaders],
        //     body: tableData,
        //   });
      
        //   doc.save('mrt-pdf-example.pdf');
        // }
      };
      
      const handleExportRowsExcel = (rows) => {
        // // Check if any rows are selected
        // if (Array.isArray(rows) && rows.length > 0) {
        //   const rowData = rows.map((row) => row.original);
        //   const csv = generateCsv(csvConfig)(rowData);
        //   download(csvConfig)(csv);
        // } else {
        //   // If no rows are selected, export all rows from the original data
        //   const csv = generateCsv(csvConfig)(data);
        //   download(csvConfig)(csv);
        // }
      };

      const table = useMantineReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        enableDensityToggle:false,
        enableFullScreenToggle:false,
        positionGlobalFilter:"left",
        enableRowActions: true,
        

        
        initialState: {
          columnPinning: { right: ['mrt-row-actions'] },
          showGlobalFilter: true,
          density: 'xs' 

          
        },
        mantinePaperProps: {
          style: { '--mrt-base-background-color': '#549433' },
        },
        mantineTableCellProps:{color: '#549433'},
        mantineTableHeadCellProps: {sx: {
          '& .mantine-TableHeadCell-Content': {
              color: '#549433',
              justifyContent: 'space-between',
          },
      }},mantineTableBodyCellProps: {sx: {color: '#549433', 
      textAlign: 'left'}},
      renderRowActions: ({ row }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <ActionIcon 
            color="#00215E">
          <VisibilityIcon />

        </ActionIcon>
          <ActionIcon
            color="orange"
            onClick={() => {
              table.setEditingRow(row);
            }}
          >
            <IconEdit />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              data.splice(row.index, 1); //assuming simple data table
              setDataT([...data]);
            }}
          >
            <IconTrash />
          </ActionIcon>
        </Box>
      ),
                
        renderTopToolbarCustomActions: ({ table }) => (
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              padding: '8px',
              flexWrap: 'wrap',
              
            }}
          >
      <div class="dropdown">
      <button class="dropbtn">Export <ChevronDown /></button>
      <div class="dropdown-content">
        <Button
              className='w-[80%] mb-1 mt-1 ml-4 bg-[#5e9643]'
              //only export selected rows
              onClick={() => handleExportRowsPdf(table.getSelectedRowModel().rows)}
              leftIcon={<IconDownload />}
              variant="filled"
            >
              PDF
            </Button>
            <Button
              className='w-[80%] mb-1 mt-1 ml-4 bg-[#5e9643]'
              //only export selected rows
              onClick={() => handleExportRowsExcel(table.getSelectedRowModel().rows)}
              leftIcon={<IconDownload />}
              variant="filled"
            >
              Excel
            </Button>
      </div>
         
    </div>
            
          </Box>
        ),
      }
    );

      
  return <MantineProvider theme={{ primaryColor: 'green' }}>
            <MantineReactTable table={table}  />
          </MantineProvider>;
  
};

export default DataTable;