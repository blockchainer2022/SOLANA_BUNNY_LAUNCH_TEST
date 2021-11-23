import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/about.png";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid  #FF7900",
      padding: "10px 0",
    },
    "& p": {
      fontSize: 18,
      marginBottom: 20,
      textAlign: "left",
    },
    "& img": {
      width: "100%",
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
    <section className={classes.root} id="about">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>About</h2>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <img src={Image} alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <p>
                Solana Bunny Business is a collection of X,XXX unique randomly
                generated SolanaBunnys stored on the blockchain. The project’s
                goal is to create a collaborative space for holders passionate
                about the burgeoning Solana NFT market.
              </p>
              <p>
                SolanaBunnys will build a large ecosystem enhanced by a constant
                stream of creativity, support, and funding to community approved
                initiatives via the BunnyDAO and community wallet. With the rise
                of massive communities across the entire NFT ecosystems across
                various L1 & L2 chains, SolanaBunnys are now here to establish a
                digital home for everyone in the Bunny community! We envision
                several derivative bunny projects to emerge out of this
                collection, promoting inclusivity!
              </p>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
