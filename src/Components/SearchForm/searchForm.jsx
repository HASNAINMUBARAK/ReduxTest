import React from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContain}>
      <box className={classes.Input}>
        <SearchIcon />
        <input
          className={classes.input}
          type="text"
          onChange={handleChange}
          placeholder="Search for a Country"
        />
      </box>
      <box className={classes.btncontainer}>
        <button className={classes.btn}>
          Filter By <ExpandMoreIcon />
        </button>
      </box>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  searchContain: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 50px",
    background: "white",
  },
  input: {
    border: "none",
    outline: "none",
  },
  Input: {
    width: "250px",
    height: "40px",
    boxShadow: "0px 0px 10px 1px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    color: "black",
    background: "white",
  },

  btn: {
    border: "none",
    borderRadius: "5px",
    height: "40px",
    boxShadow: "0px 0px 10px 1px",
    display: "flex",
    alignItems: "center",
  },
}));
export default SearchForm;
