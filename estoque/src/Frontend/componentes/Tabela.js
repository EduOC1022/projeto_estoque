import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { DataGrid, GridRowModes,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,} from '@mui/x-data-grid';
import {Container, Box, Button, Grid, TextField, Typography} from "@mui/material";



export default function TabelaEditavel (props) {
    const { colunas, dados, salvar, excluir} = props
    /* const [editedRows, setEditedRows] = useState({});
    const [editable, setEditable] = useState(false) */
    const [isInEditMode, setIsInEditMode] = useState(false)
    const [editableRows, setEditableRows] = useState(new Set());
    const [edicaoDados, setEdicaoDados] = useState({});
    const [originalData, setOriginalData] = useState({}); // Armazenar os dados originais


    const columns = [...colunas,  
        {field: 'actions', headerName: 'Ações', width: 100,
        renderCell: (params) => {
            const isRowEditable = editableRows.has(params.row.id); 

            if (isRowEditable) {
                return (
                <>
                    <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    sx={{
                        color: 'primary.main',
                    }}
                    onClick={() => 
                        {salvar(params.row);
                        setIsInEditMode(false);
                        setEditableRows(new Set());
                    }}
                    />
                    <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    sx={{
                        color: 'error.main',
                    }}
                    onClick={() => {
                        setIsInEditMode(false);
                        setEditableRows(new Set());
                        handleCancel(originalData);
                    }}
                    />
                </>
                );
            } else {
                return (
                <>
                    <GridActionsCellItem
                    icon={<CheckIcon />}
                    label="Edit"
                    onClick={() => {
                        //setIsInEditMode(true);
                        setEditableRows(new Set([params.row.id]));
                      }}
                    />
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => excluir(params.row.id)}
                    />
                </>
                );
            }
            },
        },
    ];

  const handleEdit = (row) => {
    setIsInEditMode(true);
    setOriginalData(row); // Salvar os dados originais
  };
 

    // Função para cancelar a edição da linha
  const handleCancel = (row) => {
    // Restaurar os valores originais
    const updatedData = { ...row, ...originalData };
    // Atualizar a linha com os valores originais
    // Aqui você deve implementar a lógica para atualizar o estado de dados
  };

    return (
        <Box>
            <DataGrid rows={dados} columns={columns} onRowClick={(params) => {
          if (!isInEditMode) {
            handleEdit(params.row);
          } }} editRowsModel={edicaoDados}/>
        </Box>
    )
}