import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
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

const Procedure = () => {
  const classes = useStyles();
  const [dat, setDat] = useState(null);
  const navigate = useNavigate();

  const columns1 = [
    { title: "ID", field: "id" },
    { title: "Procedure Name", field: "ProcedureName" },
    { title: "Lab Name", field: "labtype" },
    { title: "Department", field: "department" },
    { title: "Year", field: "year" },
    { title: "Institute", field: "institute" },
    { title: "University", field: "university" },
  ];

  // Fetch data
  useEffect(() => {
    fetch(`http://18.221.90.180:5000/moreInfo`)
      .then((data) => data.json())
      .then((data) => {
        setDat(data.data);
      });
  }, []);

  // New Procedure
  const addprocedure = () => {
    navigate("/newprocedure");
  };
  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }
  return (
    <div>
      <div className={classes.root}>
        {/* <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid> */}
        <div>
        <MaterialTable
            columns={columns1}
            data={dat}
            title="Procedures"
            // onRowClick={(e, data) => editProc(data.id)}
            options={{
              actionsColumnIndex: -1, 
              grouping:true,
              pageSizeOptions: [5, 10, 15],
              pageSize: 10,
              headerStyle: {
                  zIndex: 0,
                },
            }}
            actions={[
              {
                icon: "add",
                tooltip: "Add Procedure",
                isFreeAction: true,
                onClick: () => addprocedure(),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Procedure;
