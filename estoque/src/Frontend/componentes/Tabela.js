import React, {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DataGrid, GridRowModes,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,} from '@mui/x-data-grid';
import {Container, Box, Button, Grid, TextField, Typography} from "@mui/material";



export default function TabelaEditavel (props) {
    const { colunas, dados, salvar, excluir} = props

    const [editable, setEditable] = useState(false)
    const [isInEditMode, setIsInEditMode] = useState(false)

    const [editableRows, setEditableRows] = useState(new Set());



    const columns = [...colunas,  
        {field: 'actions', headerName: 'Ações', width: 100,
        renderCell: (params) => {
            if (isInEditMode) {
                return (
                <>
                    <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    sx={{
                        color: 'primary.main',
                    }}
                    //onClick={() => salvar(params.row)}
                    />
                    <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    sx={{
                        color: 'error.main',
                    }}
                    />
                </>
                );
            } else {
                return (
                <>
                    <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={() => {
                        setIsInEditMode(true);
                        setEditableRows(new Set([params.row.id]));
                      }}
                    />
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    //onClick={() => excluir(params.row)}
                    />
                </>
                );
            }
            },
        },
    ];

    const onRowClick = (rowParams) => {
        if (editableRows.has(rowParams.id)) {
          return {
            onClick: () => {},
            
          };
        }
        return null;
      };

    return (
        <Box>
            <DataGrid rows={dados} columns={columns}  onRowClick={onRowClick}/>
        </Box>
    )
}