import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../Features/FavSlicer";
import { makeStyles } from "@material-ui/core";

const Favorite = () => {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (pdid) => {
    dispatch(remove(pdid));
  };
  const classes = useStyles();
  return (
    <div>
      <h3>Favorite Countries are As Follow: </h3>
      <div className="cartWrapper">
        {Products.map((product) => {
          return (
            <div className={classes.cardContain}>
              <img className={classes.cardimg} src={product.flag} alt="" />
              <h5>{product.name}</h5>

              <button
                onClick={() => handleRemove(product.id)}
                className={classes.remove}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  cardContain: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardimg: {
    width: "300px",
    height: "230px",
  },
  remove: {
    width: 150,
    height: 40,
  },
}));
export default Favorite;
