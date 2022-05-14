import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../Features/postSlicer";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { add } from "../../Features/FavSlicer";

export default function ApiMap() {
  const classes = useStyles();
  const {
    postSlicer: { post, postLoading, postSuccess, postFailed },
  } = useSelector((state) => state);
  console.log(post, postFailed, postSuccess, postLoading, "post");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className={classes.mapComponent}>
      {postLoading && "....Loading ..."}
      {postSuccess &&
        post.map((post) => {
          return (
            <div className={classes.card}>
              <Link to="/Detail">
                <img
                  src={post.flag}
                  alt=""
                  className={classes.imag}
                  onClick={() => handleAdd(post)}
                />
              </Link>

              <box className={classes.detail}>
                <box className={classes.name}>
                  <h3 className={classes.head13}>{post.name}</h3>
                  <div className={classes.like}>
                    <button
                      className={classes.likebtn}
                      onClick={() => handleAdd(post)}
                    >
                      <FavoriteIcon style={{ color: "red" }} />
                    </button>
                  </div>
                </box>
                <box className={classes.des}>
                  <h5 className={classes.head5}>
                    Population: {post.population}
                  </h5>
                  <h5 className={classes.head5}>Region: {post.region}</h5>
                  <h5 className={classes.head5}>Capital: {post.capital}</h5>
                </box>
              </box>
            </div>
          );
        })}
      {postFailed && <h1>Failed</h1>}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  mapComponent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: 20,
    borderColor: "black",
    boxShadow: "0px 0px 15px 2px",
    background: "#063875",
    borderRadius: "5px",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px",
  },
  des: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 15px",
    opacity: "0.8",
  },
  imag: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    width: "270px",
    height: "160px",
  },
  count: {
    width: "20px",
    background: "#063875",
    border: "none",
    color: "white",
  },
  like: {
    display: "flex",
    alignItems: "center",
  },
  likebtn: {
    background: "#063875",
    border: "none",
  },
  head13: {
    color: "white",
  },
  head5: {
    color: "white",
    padding: 0,
    margin: 5,
  },
}));
