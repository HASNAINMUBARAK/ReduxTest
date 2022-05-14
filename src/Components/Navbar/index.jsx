import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item lg={3} md={3} sm={12} className={classes.grid1}>
          <Link to="/" className={classes.logo}>
            Where is the Word?
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={5}
          md={4}
          sm={12}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/" className={classes.dropdown}>
            Home{" "}
          </Link>
          <Link to="/About" className={classes.dropdown}>
            About{" "}
          </Link>
          <Link to="/Service" className={classes.dropdown}>
            Services{" "}
          </Link>
          <Link to="/Contact" className={classes.dropdown}>
            Contact Us{" "}
          </Link>
          <Link to="/Favorite" className={classes.dropdown}>
            Favorite{" "}
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={1}
          md={2}
          sm={12}
          className={classes.grid3}
          display="flex"
          alignItems="center"
        >
          <Link to="/" className={classes.dark}>
            <NightsStayIcon />
            Dark Mode
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    height: "68px",
    padding: "20px 0px",
    boxShadow: "0px 1px 12px 3px",
    [theme.breakpoints.down("md")]: {
  
    },
  },
  logo: {
    textDecoration: "none",
    fontSize: "x-large",
    "&:hover": {
      cursor: "pointer",
    },
  },
  grid1: {
    paddingLeft: 20,
  },
  grid2: {
    [theme.breakpoints.down("xs")]: {
       
    },
  },
  dropdown: {
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  dark: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
}));
export default Navbar;
