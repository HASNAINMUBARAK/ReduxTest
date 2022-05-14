import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../Features/postSlicer";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

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
  // for Like
  const [num, setnum] = useState(0);
  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
    }
  };
  const incNum = () => {
    setnum(num + 1);
  };

  return (
    <div className={classes.mapComponent}>
      {/* <button
                onClick={() => {
                  dispatch(getPost());
                }}
              >
                get data
              </button> */}
      {postLoading && "....Loading ..."}
      {postSuccess &&
        post.map((post) => {
          return (
            <div className={classes.card}>
              <Link to="/:CountryDetails">
                <img src={post.flag} alt="" className={classes.imag} />
              </Link>

              <box className={classes.detail}>
                <box className={classes.name}>
                  <h3>{post.name}</h3>
                  <div className={classes.like}>
                    <input
                      className={classes.count}
                      id="out"
                      type="text"
                      value={num}
                    ></input>
                    <button className={classes.likebtn} onClick={incNum}>
                      <FavoriteIcon style={{ color: "red" }} />
                    </button>
                  </div>
                </box>
                <box className={classes.des}>
                  <h5>Population: {post.population}</h5>
                  <h5>Region: {post.region}</h5>
                  <h5>Capital: {post.capital}</h5>
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
    background: "#063875",
    borderRadius: "5px",
    color: "white",
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
}));
