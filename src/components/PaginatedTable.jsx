import React, {  useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function PaginatedTable({dataTable}) {

    
const statusStyle = {
    p: 4,
    width: "100%",
  };
  const singleStatusStyle = {
    width: "100%",
    bgcolor: "green",
    color: "white",
    align: "center",
    p: 4,
  };
  
  const modalStyles={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        color: "black",
  }

  
    const [open, setOpen] = React.useState(false);
    const [selectedRowInfo, setSelectedRowInfo] = useState({});
    const handleClose = () => setOpen(false);
  
    const showInfoHandler = (info) => {
      setOpen(true);
      setSelectedRowInfo(info);
    };
  

    const columns = [
      { field: "age", headerName: "age", width: 150 },
      { field: "progress", headerName: "progress", width: 150 },
      {
        field: "status",
        headerName: "status",
        width: 150,
        renderCell: (field) => {
          return (
            <Box
              sx={
                field.formattedValue === "single"
                  ? singleStatusStyle
                  : statusStyle
              }
            >
              {field.formattedValue}
            </Box>
          );
        },
      },
  
      { field: "visits", headerName: "visits", width: 150 },
      {
        field: "",
        headerName: "Info",
        renderCell: (field) => {
          return (
            <Button
              variant="contained"
              onClick={() => showInfoHandler(field.row)}
            >
              info
            </Button>
          );
        },
      },
    ];
  
  return (
        <div >
 <Box
minHeight="400px"
sx={{background:'white'}}
>
 <DataGrid rows={dataTable} columns={columns} />

     
 </Box>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={modalStyles}>
    <Typography id="modal-modal-title" variant="h6">
      Selected Row Info:
    </Typography>
    <Typography id="modal-modal-description-age" sx={{ mt: 2 }}>
      age:{selectedRowInfo.age}
    </Typography>

    <Typography id="modal-modal-description-visits" sx={{ mt: 2 }}>
      visits:{selectedRowInfo.visits}
    </Typography>

    <Typography id="modal-modal-description-progress" sx={{ mt: 2 }}>
      progress:{selectedRowInfo.progress}
    </Typography>
    <Typography id="modal-modal-description-status" sx={{ mt: 2 }}>
      status:{selectedRowInfo.status}
    </Typography>
  </Box>
</Modal>
</div>

  )
}

export default PaginatedTable