import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { BASE_URL } from "../../routers/index.js";

import styled from "@emotion/styled";
import { Color } from "../../styles/style_constants.js";

import { Box, Avatar } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

import Modal from "../Layouts/Modal.jsx";

import {
  GridRowModes,
  DataGrid,
  // GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";

import { selectAllUsers } from "../../app/features/userSlice";

import {
  useDeleteUserMutation,
  useLazyGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../app/services/userApi";

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;
//
//   const handleClick = () => {};
//
//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

export default function DataGridUsers() {
  const [GetAllUsers] = useLazyGetAllUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const users_list = useSelector(selectAllUsers);

  const [modalActive, setModalActive] = React.useState(false);
  const [messageError, setMessageError] = React.useState("");

  const [removeUserId, setRemoveUserId] = React.useState();
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [rows, setRows] = React.useState(users_list);
  const [rowModesModel, setRowModesModel] = React.useState({});

  // useEffect(() => {
  //   const usersList = async () => {
  //     const users_list = await useSelector(selectAllUsers);
  //     setRows(users_list);
  //   };
  //   usersList();
  // }, [GetAllUsers]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    // setRows(rows.filter((row) => row.id !== id));
    // _______________________________________________________________________
    setModalActive(true);
    setRemoveUserId(id);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  // const processRowUpdate = (newRow) => {
  //   const updatedRow = { ...newRow, isNew: false };
  //   setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  //   return updatedRow;
  // };

  // _______________________________________________________________________

  const processRowUpdate = async (newRow) => {
    try {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));

      await updateUser(newRow).unwrap();

      return updatedRow;
    } catch (error) {
      setMessageError(error.data.message);
    }
  };

  const processRowDelete = async () => {
    const id = removeUserId;
    // try {
    setRows(rows.filter((row) => row.id !== id));
    await deleteUser(id).unwrap();
    await GetAllUsers().unwrap();
    const users_list = await useSelector(selectAllUsers);
    setRows(users_list);
    // } catch (error) {
    //   setMessageError(error.data.message);
    // }
    setModalActive(false);
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleFileChange = (e) => {
    if (e.target.files !== null) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const columns = [
    {
      field: "rowId",
      headerName: "#",
      flex: 0.1,
      minWidth: 40,
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: false,
    },
    {
      field: "avatarUrl",
      headerName: "Аватар",
      flex: 0.1,
      minWidth: 70,
      renderCell: (params) => (
        <Avatar
          sx={{ margin: "auto" }}
          src={`${BASE_URL}${params.row.avatarUrl}`}
        />
      ),
      headerAlign: "center",
      sortable: false,
      filterable: false,
    },
    {
      field: "lastName",
      headerName: "Фамилия",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "firstName",
      headerName: "Имя",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "surName",
      headerName: "Отчество",
      flex: 1,
      minWidth: 125,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 100,
      editable: true,
    },
    {
      field: "password",
      headerName: "Пароль",
      flex: 1,
      minWidth: 100,
      renderCell: (params) =>
        params.row.password
          .split("")
          .slice(0, 20)
          .map(() => "*"),
      editable: true,
    },
    {
      field: "role",
      headerName: "Роль",
      flex: 0.2,
      minWidth: 110,
      editable: true,
      cellClassName: "selectInput",
      type: "singleSelect",
      valueOptions: ["GUEST", "USER", "ADMIN"],
    },
    {
      field: "createdAt",
      headerName: "Дата регистрации",
      flex: 1,
      minWidth: 160,
      editable: false,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex: 0.5,
      minWidth: 80,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={
                <SaveIcon
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                />
              }
              label="Save"
              onClick={handleSaveClick(id)}
              color="inherit"
              sx={{
                color: Color.btn_edit,
                border: "2px solid",
                borderColor: Color.btn_edit,
                borderRadius: "50px",
                "&:hover": {
                  color: Color.body_text,
                  backgroundColor: Color.btn_edit,
                },
              }}
            />,
            <GridActionsCellItem
              icon={
                <CancelIcon
                  sx={{
                    color: "inherit",
                    "&:hover": {
                      color: "inherit",
                    },
                  }}
                />
              }
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              sx={{
                color: Color.btn_delete,
                border: "2px solid",
                borderColor: Color.btn_delete,
                borderRadius: "50px",
                "&:hover": {
                  color: Color.body_text,
                  backgroundColor: Color.btn_delete,
                },
              }}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="btn-edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="btn-delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "calc(100vh - 165px)",
        width: "100%",

        "& .btn-edit": {
          color: Color.btn_edit,
          borderRadius: "8px 0 0 8px",
          border: "1px solid",
          borderColor: Color.btn_border,
          "&:hover": {
            color: Color.body_text,
            backgroundColor: Color.btn_edit_hover,
          },
        },

        "& .btn-delete": {
          color: Color.btn_delete,
          borderRadius: "0 8px 8px 0",
          border: "1px solid",
          borderColor: Color.btn_border,
          "&:hover": {
            color: Color.body_text,
            backgroundColor: Color.btn_delete_hover,
          },
        },

        "& .MuiDataGrid-root .MuiDataGrid-row--editing .MuiDataGrid-cell": {
          background: Color.table_row_edit_bg,
        },

        "& .MuiDataGrid-root .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within":
          {
            outline: "1px solid",
            outlineColor: "#DC0B0BFF",
            outlineOffset: "-1px",
          },
      }}
    >
      <DataGridStl
        // rows={rows}
        rows={rows.map((item, index) => {
          return { rowId: index + 1, ...item };
        })}
        getRowId={(row) => row.id}
        disableColumnMenu
        columns={columns}
        columnHeaderHeight={48}
        rowHeight={40}
        hideFooter
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        // slots={{
        //   toolbar: EditToolbar,
        // }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
      <Modal
        type="error"
        active={modalActive}
        setActive={setModalActive}
        title={messageError}
      />
      {removeUserId !== null && (
        <Modal
          type="delete"
          active={modalActive}
          setActive={setModalActive}
          onRemoveUser={processRowDelete}
          btnName="Удалить"
          title="Удалить пользователя?"
        />
      )}
    </Box>
  );
}

const DataGridStl = styled(DataGrid)(() => ({
  padding: "0 1px",
  color: Color.table_text,
  borderColor: Color.table_border,
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",

  "& .MuiDataGrid-columnHeader": {
    background: Color.table_header,
    borderRight: "1px solid",
    borderBottom: "0px solid",
    borderColor: Color.table_border,
  },
  "& .MuiDataGrid-cell": {
    borderRight: "1px solid",
    borderBottom: "0px solid",
    borderColor: Color.table_border,
  },

  "& .MuiDataGrid-row": {
    backgroundColor: Color.table_bg,
    "&:hover": {
      backgroundColor: Color.table_row_hover,
    },
  },

  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },

  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: Color.table_row_select,
  },

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    // borderColor: "#024880",
    borderWidth: "0px",
  },

  "& .MuiDataGrid-scrollbarFiller--header": {
    background: Color.table_row_select,
  },

  "& ::-webkit-scrollbar": {
    width: "6px",
    height: "calc(100vh - 145px)",
    border: 0,
  },
  "& ::-webkit-scrollbar-track": {
    backgroundColor: Color.scrollbar_track,
    border: 0,
  },
  "& ::-webkit-scrollbar-thumb": {
    borderRadius: "5px",
    backgroundColor: Color.scrollbar_thumb,
  },
}));
