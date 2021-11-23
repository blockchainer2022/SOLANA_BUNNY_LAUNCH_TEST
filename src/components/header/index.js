import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.5rem 0",
    borderBottom: "2px solid #FF7900",
    position: "relative",
    fontFamily: "Galano Grotesque SemiBold",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
    },
  },
  menu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    listStyle: "none",
    [theme.breakpoints.up("md")]: {
      paddingRight: "100px",
    },
    "& li a": {
      color: "white",
      display: "inline-block",
      textDecoration: "none",
      marginLeft: "30px",
      fontSize: "22px",
      textTransform: "uppercase",
      transition: "all 0.5s",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      "&:hover": {
        color: "#FF7900",
      },
    },
  },
  menubar: {
    color: "white",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    marginLeft: "auto",
    display: "block",
    "& svg": {
      fontSize: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileMenu: {
    position: "absolute",
    top: "110%",
    left: "50%",
    width: "95%",
    transform: "translateX(-50%)",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "10px",
    maxHeight: "0px",
    overflow: "hidden",
    transition: "all 0.5s",
    "&.active": {
      maxHeight: "500px",
    },
    "& ul": {
      backgroundColor: "white",
      listStyle: "none",
      textALign: "center",
      borderRadius: "10px",
      padding: 0,
      "& li a": {
        color: "black",
        display: "block",
        textDecoration: "none",
        fontSize: "20px",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Index = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <ul className={classes.menu}>
          <li>
            <a href="#rarity">Sneak Peek</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>
        <button
          className={classes.menubar}
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon />
        </button>
        <div className={`${classes.mobileMenu} ${open ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#rarity">Sneak Peek</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#faq">Faq</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Index;
