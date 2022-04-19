import React, {useState} from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Avatar from "@mui/material/Avatar";


export default function UserCard(){
    return(
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <CardActionArea>
        <Card sx={{ minWidth: 385, borderRadius: '16px', border: 1, borderColor: 'grey.500', minHeight: 600}}>
        <ul style={{
            marginLeft: "-40px",
        }}>
              <li
                style={{
                    listStyle: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    marginTop: "150px",
                  }}
                >
                  S
                </Avatar>
              </li>
              <li style={{
                    listStyle: "none",}}>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    marginTop: "20px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                    Shreyas Kumar
                </Typography>
              </li>
              <li style={{
                    listStyle: "none",}}>
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  Bokaro Steel City
                </Typography>
              </li>
            </ul>
        </Card>
        </CardActionArea>
        </Box>
    );
}