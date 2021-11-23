import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const accordianData = [
  {
    question: "Total supply of Solana Bunnys?",
    answer:
      "This is a stealth mint, supply of OG Solana Bunnys will be released after mint is completed.",
  },
  {
    question: "What is the minting cost?",
    answer: "0.25 for all X,XXX Solana Bunnys.",
  },
  {
    question: "Where can I buy or sell Solana Bunnys?",
    answer:
      "After mint, a marketplace will be available on MagicEden. We will be working on other Marketplaces as well.",
  },
  {
    question: "What is the Solana Bunny roll call?",
    answer: "THUMP THUMP ",
  },
];
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid white",
      padding: "10px 0",
    },
  },
  header: {
    fontSize: "50px",
    margin: "20px 0 40px",
    color: "#FF7900",
    textTransform: "uppercase",
  },
  accrodian: {
    textAlign: "center",
    color: "black",
    marginTop: 20,
    "& p": {
      color: "white",
    },
  },
  item: {
    padding: "10px",
    borderRadius: "10px",
    color: "white",
    backgroundColor: "#FF7900",
    cursor: "pointer",
    "& h3": {
      fontFamily: "Galano Grotesque SemiBold",
    },
  },
  show: {
    padding: "10px 0 0 0",
  },
  hidden: {
    overflow: "hidden",
    maxHeight: 0,
    height: 0,
  },
});

const Index = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className={classes.root} id="faq">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>FAQ</h2>
          <div className="">
            {accordianData.map((v, i) => (
              <div key={i} className={classes.accrodian}>
                <div className={classes.item} onClick={() => toggle(i)}>
                  <h3 style={{ userSelect: "none" }}>{v.question}</h3>
                </div>
                <div
                  className={` ${
                    clicked === i ? classes.show : classes.hidden
                  }`}
                >
                  <p className="">{v.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
