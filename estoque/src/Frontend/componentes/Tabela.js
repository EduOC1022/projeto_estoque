import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function TabelaEditavel(props) {
  const { colunas, dados, salvar, carregar } = props;
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [originalData, setOriginalData] = useState({}); // Armazenar os dados originais

  const columns = [
    ...colunas,
    {
      field: "actions",
      headerName: "Ações",
      width: 100,
      renderCell: (params) => {
        if (params.row.id === originalData.id && isInEditMode) {
          return (
            <>
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                sx={{
                  color: "primary.main",
                }}
                onClick={() => {
                  salvar(params.row);
                  setIsInEditMode(false);
                }}
              />
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                sx={{
                  color: "error.main",
                }}
                onClick={() => {
                  setIsInEditMode(false);
                }}
              />
            </>
          );
        } else {
          return (
            <GridActionsCellItem
              icon={<CheckIcon />}
              label="Edit"
              onClick={() => {
                setIsInEditMode(true);
                setOriginalData(params.row); // Salvar os dados originais
              }}
            />
          );
        }
      },
    },
    
  ];

  return (
    <Box sx={{ height: "100%" }}>
      <DataGrid
        rows={dados}
        columns={columns}
        onRowClick={(params) => {
          if (!isInEditMode) {
            setOriginalData(params.row);
            setIsInEditMode(true);
          }
        }}
      />
    </Box>
  );
}




// import React, {useState} from "react";
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import CheckIcon from '@mui/icons-material/Check';
// import { DataGrid,
//     GridActionsCellItem} from '@mui/x-data-grid';
// import {Box} from "@mui/material";
// import { useDemoData } from '@mui/x-data-grid-generator';



// export default function TabelaEditavel (props) {

//     const { colunas, dados, salvar, carregar} = props
//     const [isInEditMode, setIsInEditMode] = useState(false)
//     const [editableRows, setEditableRows] = useState(new Set());
//     const [edicaoDados, setEdicaoDados] = useState({});
//     const [originalData, setOriginalData] = useState({}); // Armazenar os dados originais


//     const columns = [...colunas,  
//         {field: 'actions', headerName: 'Ações', width: 100,
//         renderCell: (params) => {
//             const isRowEditable = editableRows.has(params.row.id); 

//             if (isRowEditable) {
//                 return (
//                 <>
//                     <GridActionsCellItem
//                     icon={<SaveIcon />}
//                     label="Save"
//                     sx={{
//                         color: 'primary.main',
//                     }}
//                     onClick={() => 
//                         {salvar(params.row);
//                         setIsInEditMode(false);
//                         setEditableRows(new Set());
//                     }}
//                     />
//                     <GridActionsCellItem
//                     icon={<CancelIcon />}
//                     label="Cancel"
//                     sx={{
//                         color: 'error.main',
//                     }}
//                     onClick={() => {
//                         setIsInEditMode(false);
//                         setEditableRows(new Set());
//                         props.carregar();
//                     }}
//                     />
//                 </>
//                 );
//             } else {
//                 return (
//                 <>
//                     <GridActionsCellItem
//                     icon={<CheckIcon />}
//                     label="Edit"
//                     onClick={() => {
//                         //setIsInEditMode(true);
//                         setEditableRows(new Set([params.row.id]));
//                       }}
//                     />
//                 </>
//                 );
//             }
//             },
//         },
//     ];

//   const handleEdit = (row) => {
//     setIsInEditMode(true);
//     setOriginalData(row); // Salvar os dados originais
//   };
 
//   return (
//     <Box sx={{height: '100%' }}>
//         <DataGrid 
//                  rows={dados} columns={columns} onRowClick={(params) => {
//       if (!isInEditMode) {
//         handleEdit(params.row);
//       } }} editRowsModel={edicaoDados}/>
//     </Box>
//   )
// }