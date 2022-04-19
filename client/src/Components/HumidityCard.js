import React, {useState} from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function HumidityCard(){
    const [H, setH] = useState("87.68");
    return(
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <CardActionArea>
        <Card sx={{ minWidth: 260, borderRadius: '16px', border: 1, borderColor: 'primary.main', minHeight: 150}}>
            <CardHeader action={
          <DeviceThermostatIcon fontSize="large" color="disabled"/>}
          title="Humidity" />
          <CardContent>
            
            <Typography gutterBottom variant="h4" component="div" sx={{alignContent:"center", justifyContent:"center"}}>
          {H}%
        </Typography>
        </CardContent>
        </Card>
        </CardActionArea>
        </Box>
    );
}