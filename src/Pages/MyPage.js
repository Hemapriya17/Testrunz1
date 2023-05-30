import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


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
  return (
    <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Submitted RunZ
            </Typography>
          </CardContent>
        </Card>
    </div>
  )
}

export default MyPage
