import React, {useState} from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ReactLoading from 'react-loading';
import axios from "axios";

export default function PredictionCard(){
    const [Prediction, setPridiction] = useState();

    const runPred = async () =>{
        setPridiction("Refresh")
        const res = await axios.post("/api/wml/score");
        setPridiction(res)
        console.log(res)
    } 
    return(
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <CardActionArea>
        <Card sx={{ minWidth: 345, borderRadius: '16px', border: 1, borderColor: 'primary.main', minHeight: 150}}>
            <CardHeader action={
          <IconButton aria-label="settings" onClick={e=>runPred()}><CachedIcon fontSize="large" color="primary"/></IconButton>}
          title="What you should plant" />
          <CardContent>
            
            <Typography gutterBottom variant="h4" component="div" sx={{alignContent:"center", justifyContent:"center"}}>
          {Prediction !=="Refresh" && Prediction ? "" : ""}
          {Prediction=="Refresh" ? <ReactLoading color={"#000000"} height={'12%'} width={'12%'} />: !Prediction ? "" : Prediction.data}
        </Typography>
        </CardContent>
        </Card>
        </CardActionArea>
        </Box>
    );
}