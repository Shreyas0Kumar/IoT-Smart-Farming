import PredictionCard from "./Components/PredictionCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NCard from "./Components/NCard";
import PCard from "./Components/PCard";
import KCard from "./Components/KCard";
import TempCard from "./Components/TempCard";
import PhCard from "./Components/PhCard";
import RainCard from "./Components/RainCard";
import HumidityCard from "./Components/HumidityCard";
import UserCard from "./Components/UserCard";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: 600 }}>
      <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 70,
        backgroundColor: 'primary.dark',
        alignContent:"center", justifyContent:"center"
      }}
    >
      <Typography gutterBottom variant="h4" component="div" color={"#fff"} sx={{paddingTop: "10px"}}>
      IoT Smart Farming
        </Typography>
      
      </Box>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <UserCard />
        </Grid>
        <Grid xs={9}>
        <Grid container spacing={1} sx={{paddingTop: "45px"}}>
        <Grid item xs={0.8}></Grid>
        <Grid item xs={3.5}>
          <NCard />
        </Grid>
        <Grid item xs={3.5}>
          <PCard />
        </Grid>
        <Grid item xs={3.5}>
          <KCard />
        </Grid>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={0.8}></Grid>
        <Grid item xs={3.5}>
          <TempCard />
        </Grid>
        <Grid item xs={3.5}>
          <HumidityCard />
        </Grid>
        <Grid item xs={3.5}>
          <RainCard />
        </Grid>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={0.8}></Grid>
        <Grid item xs={3}>
          <PhCard />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
        <PredictionCard />
        </Grid>
        </Grid>
        </Grid>
      </Grid>
      <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 70,
        alignContent:"center", justifyContent:"center"
      }}
    >
      <ul style={{
      marginLeft: "-40px", marginTop: "-50px",
  }}>
        <li
          style={{
              listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
      <Typography gutterBottom variant="overline" component="div">
      KIIT UNIVERSITY
        </Typography>
        </li>
        <li
          style={{
              listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
      <Typography gutterBottom variant="overline" component="div">
      MINOR PROJECT 
        </Typography>
        </li>
        <li
          style={{
              listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
        <Typography gutterBottom variant="caption" component="div" >
          SHREYAS KUMAR    SIDDHANT NEGI     MISHA BHARTI     RITIK DUBEY
        </Typography>
        </li>
        </ul>
      
      </Box>
    </Box>
  );
}

export default App;
