import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "@material-table/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  card: {
    marginTop: theme.spacing(2),
  },
}));

const MyPage = () => {
  const classes = useStyles();
  const [dat, setDat] = useState([]);
  const columns1 = [
    { title: "S.NO", field: "id", width: "18%" },
    { title: "Procedure Name", field: "ProcedureName", width: "25%" },
    { title: "Lab Name", field: "labname", width: "35%" },
    { title: "Year", field: "year", width: "15%" },
    { title: "Submitted By", field: "studentName" },
    { title: "Submitted Time", field: "sharedDates" },
  ];

  // Fetch data
  useEffect(() => {
    fetch(`http://18.221.90.180:5000/experiments/mypage`)
      .then((data) => data.json())
      .then((data) => {
        setDat(data.data);
      });
  }, []);

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={columns1}
        data={dat}
        title="Submitted"
        // onRowClick={(e, data) => playUser(data.ProcedureId)}
        options={{
          actionsColumnIndex: -1,
          grouping: true,
          pageSizeOptions: [5, 10],
          pageSize: 10,
          headerStyle: {
            zIndex: 0,
          },
          tableLayout: "auto",
        }}
        localization={{
          pagination: { labelRowsSelect: "Runz" },
          body: {
            editRow: {
              deleteText: `Are you sure you want to delete this experiment?`,
            },
          },
        }}
        // editable={{
        //   onRowDelete: (data) =>
        //     new Promise((resolve, reject) => {
        //       deleteUser(data);

        //       setTimeout(() => resolve(), 500);
        //     }),
        // }}
      />
    </div>
  );
};

export default MyPage;
