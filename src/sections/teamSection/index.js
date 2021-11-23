import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/team1.png";
import Image2 from "../../assets/team2.png";
import Image3 from "../../assets/team3.png";
import Image4 from "../../assets/team4.png";

const data = [
  {
    image: Image1,
    title: "B Rabbit",
    role: "Co-founder",
    dep: "(Management)",
  },
  {
    image: Image2,
    title: "Thumper",
    role: "Co-founder",
    dep: "(tech)",
  },
  {
    image: Image3,
    title: "Roger Rabbit",
    role: "Co-founder",
    dep: "(Arts)",
  },
  {
    image: Image4,
    title: "Baxter",
    role: "",
    dep: "(Comedic Relief)",
  },
];

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid #FF7900",
      padding: "10px 0",
    },
    "& h5": {
      fontFamily: "Galano Grotesque SemiBold",
      fontSize: "20px",
    },
    "& p": {
      fontSize: 18,
    },
    "& span": {
      fontSize: 18,
    },
  },
  header: {
    fontSize: "50px",
    margin: "20px 0 40px",
    color: "#FF7900",
    textTransform: "uppercase",
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="team">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>Team Members</h2>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            {data.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                <img src={v.image} alt="" style={{ width: "100%" }} />
                <h5>{v.title}</h5>
                <p>{v.role}</p>
                <span>{v.dep}</span>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
