import React from "react";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";

const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "rgb(20 35 72)" }}>
      <hr
        style={{
          margin: "40px 0px",
          border: "none",
          height: "2px",
          padding: "0.8px 0px",

          background: "linear-gradient(45deg, transparent 10%, #002c40)",
        }}
      />

      <div className={classes.foottt}>
        <div className={classes.foot}>
          <div className={classes.one}>
            <h4 style={{ padding: "20px 0px", color: "white" }}>
              Get the latest Quencie update
            </h4>
            <div className={classes.signin}>
              <input></input>
              <button>Signin</button>
            </div>
          </div>
          <div className={classes.two}>
            <h3 className={classes.heading3}>Quenciesates</h3>
            <ul>
              <li>
                <a href="/about"> About us</a>
              </li>
              <li>
                <a href="/about">How it work </a>
              </li>
              <li>
                <a href="/about"> Support</a>
              </li>
              <li>
                <a href="/about"> Become a partner</a>
              </li>
            </ul>
          </div>
          <div className={classes.three}>
            <h3 className={classes.heading3}>Quenciesates</h3>
            <ul>
              <li>
                <a href="/about"> About us</a>
              </li>
              <li>
                <a href="/about">How it work </a>
              </li>
              <li>
                <a href="/about"> Support</a>
              </li>
              <li>
                <a href="/about"> Become a partner</a>
              </li>
            </ul>
          </div>
          <div className={classes.four}>
            <h3 className={classes.heading3}>Quenciesates</h3>
            <ul>
              <li>
                <a href="/about"> About us</a>
              </li>
              <li>
                <a href="/about">How it work </a>
              </li>
              <li>
                <a href="/about"> Support</a>
              </li>
              <li>
                <a href="/about"> Become a partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.foott}>
          <h5 style={{ padding: "20px 0px", color: "white" }}>
            Join the Community
          </h5>
          <div style={{ margin: "20px 0px" }}>
            <TwitterIcon className={classes.icons} />
            <InstagramIcon className={classes.icons} />
            <FacebookIcon className={classes.icons} />
            <TelegramIcon className={classes.icons} />
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  foottt: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  foot: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
    },
  },
  one: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  signin: {
    display: "flex",
  },
  two: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  three: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  four: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  foott: {
    marginLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "center",
      alignItems: "center",
      margin: 0,
    },
  },
  heading3: {
    color: "white",
  },
  icons: {
    color: "white",
    padding: "10px 20px",
  },
}));
export default Footer;
