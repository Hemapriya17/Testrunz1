import React,{useEffect, useState} from 'react'
import MaterialTable from '@material-table/core';
import { RiShareForwardFill } from "react-icons/ri";

const Runz = () => {
  const [dat, setDat] = useState([]);
  let rows = [];
  const column = [
    { title: "ID", field: "userid" },
    { title: "Procedure Name", field: "experimentName", width: "25%" },
    { title: "Lab Name", field: "labType", width: "15%" },
    { title: "Description", field: "procedureDescription", width: "18%" },
    {
      title: "Assigned By",
      field: "assignedBy",
      emptyValue: () => <em>hema.learny@gmail.com</em>,
    },
    {
      title: "Grade",
      field: "grade",
      emptyValue: () => <em>-</em>,
      render: (rowData) => (
        <div style={{ color: rowData.grade < "5" ? "red" : "green" }}>
          {rowData.grade}
        </div>
      ),
    },
    // { title: "Created Time", field: "time" },
  ];

    // Fetch data
    useEffect(() => {
      fetch(`http://18.221.90.180:5000/experiments/runz/62cc0a2e40ef522ae0efac46?role=superadmin`)
        .then((data) => data.json())
        .then((data) => {
          setDat(data.data);
        });
    }, []);


  return (
    <div>
      <MaterialTable
              columns={column}
              // data={rows}
              data={dat}
              title="Runz"
              onRowClick={(e, data) => {
                // playUser(data.ProcedureId);
              }}
              options={{
                actionsColumnIndex: -1,
                grouping: true,
                pageSizeOptions: [5, 10],
                pageSize: 10,
                headerStyle: {
                  zIndex: 0,
                },
              }}
              localization={{
                pagination: { labelRowsSelect: "Runz" },
                body: {
                  editRow: {
                    deleteText: `Are you sure you want to delete this runz?`,
                  },
                },
              }}
              actions={[
                {
                  icon: "add",
                  tooltip: "Add Runz",
                  isFreeAction: true,
                  // onClick: () => openModal(),
                },
                {
                  icon: () => <RiShareForwardFill />,
                  tooltip: "Share",
                  // onClick: (e, data) => shareRunz(data),
                  // onClick: (e, data) => alert(data.ProcedureId)
                },
              ]}
              editable={{
                onRowDelete: (selectedRow) =>
                  new Promise((resolve, reject) => {
                    // deleteUser(selectedRow.ProcedureId);
                    setTimeout(() => resolve(), 500);
                  }),
              }}
            />
    </div>
  )
}

export default Runz