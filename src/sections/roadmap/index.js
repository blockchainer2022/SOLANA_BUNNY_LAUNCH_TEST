import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/Done.svg";
import Image2 from "../../assets/Coming-Soon.svg";
import Image3 from "../../assets/In-progress.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid #FF7900",
      padding: "10px 0",
    },
  },
  header: {
    fontSize: "50px",
    margin: "20px 0 40px",
    color: "#FF7900",
    textTransform: "uppercase",
  },

  content: {
    margin: "50px auto 0 auto",
    maxWidth: "700px",
    width: "100%",
    textAlign: "left",
    "& h6": {
      fontFamily: "Galano Grotesque SemiBold",
      fontSize: 30,
    },
  },
  top: {
    padding: "10px 0",

    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: 10,
      width: 30,
    },
    "& p": {
      fontSize: 16,
    },
  },
  topContainer: {
    margin: "0 30px",
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  },
  bottom: {
    marginTop: 30,
    marginBottom: 50,
    "& h6": {
      marginBottom: 10,
    },
    "& img": {
      width: 25,
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="roadmap">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>Road map</h2>
          <Box className={classes.content}>
            <Grid container className={classes.topContainer} spacing={2}>
              <Grid item xs className={classes.top}>
                <img src={Image1} alt="" />
                <span>
                  <b>Done</b>
                </span>
              </Grid>
              <Grid item xs className={classes.top}>
                <img src={Image2} alt="" />
                <span>
                  <b>In Progress</b>
                </span>
              </Grid>
              <Grid item xs className={classes.top}>
                <img src={Image3} alt="" />
                <span>
                  <b>Coming Soon</b>
                </span>
              </Grid>
            </Grid>
            <Box className={classes.bottom}>
              <h6>Q4 2021</h6>
              <Box className={classes.top}>
                <img src={Image1} alt="" />
                <p>Solana Bunny Business (SBB) website launch </p>
              </Box>
              <Box className={classes.top}>
                <img src={Image1} alt="" />
                <p>Stealth Mint X,XXX Solana Bunny NFTs</p>
              </Box>
              <Box className={classes.top}>
                <img src={Image2} alt="" />
                <p>List On Secondary Marketplaces</p>
              </Box>
              <Box className={classes.top}>
                <img src={Image2} alt="" />
                <p>
                  Attributes, metadata, and rarity ranking reveal Launch
                  BunnyDAO
                </p>
              </Box>
              <Box className={classes.top}>
                <img src={Image2} alt="" />
                <p>
                  Launch $SolBunny token with percentage of supply airdropped to
                  all NFT holders
                </p>
              </Box>
            </Box>{" "}
            <Box className={classes.bottom}>
              <h6>Q1 2022</h6>
              <Box className={classes.top}>
                <img src={Image2} alt="" />
                <p>
                  {
                    "Launch Solana Bunny Hop - A NFT game for Bunnys, Monkeys, and other Degens"
                  }
                </p>
              </Box>
              <Box className={classes.top}>
                <img src={Image3} alt="" />
                <p>Launch Bunny Bombs (NFT Airdrop for Bunny holders)</p>
              </Box>
              <Box className={classes.top}>
                <img src={Image3} alt="" />
                <p>Exclusive SBB merchandise drop limited to holders only</p>
              </Box>
            </Box>{" "}
            <Box className={classes.bottom}>
              <h6>Q2 2022 - and beyond</h6>
              <Box className={classes.top}>
                <img src={Image3} alt="" />
                <p>
                  Create more fun, interactive experiences for Solana NFT
                  ecosystem
                </p>
              </Box>
              <Box className={classes.top}>
                <img src={Image3} alt="" />
                <p>
                  Bunny Holders will receive owner-exclusive advantages and
                  exclusive rewards
                </p>
              </Box>
              <Box className={classes.top}>
                <img src={Image3} alt="" />
                <p>Continue to innovate based on community requests</p>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
