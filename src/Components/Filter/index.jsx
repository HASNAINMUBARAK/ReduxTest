import { Box, makeStyles } from "@material-ui/core";

const Filter = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.filterMain}>
        <select
          id="countries"
          name="countries"
          className={classes.filterSelection}
        >
          <option value="region" className={classes.filterOption}>
            Filter by Region
          </option>
          <option value="Africa" className={classes.filterOption}>
            Africa
          </option>
          <option value="America" className={classes.filterOption}>
            America
          </option>
          <option value="Asia" className={classes.filterOption}>
            Asia
          </option>
          <option value="Europe" className={classes.filterOption}>
            Europe
          </option>
          <option value="Oceania" className={classes.filterOption}>
            Oceania
          </option>
        </select>
      </Box>
    </>
  );
};
export default Filter;
const useStyles = makeStyles((theme) => ({
  filterMain: {
    border: "none",
  },
  filterSelection: {
    padding: "10px",
    border: "none",
    width: "170px",
    height: "40px",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  filterOption: {
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
}));
