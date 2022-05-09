import { Paper, Grid, Stack, Typography, Avatar, Box, Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const CarsHomePage = () => {
  const [carSpecs, setCarSpecs] = useState([]);
  useEffect(() => {
    axios
      .get("https://6278a291d00bded55adbbc4c.mockapi.io/specs")
      .then((res) => {
        setCarSpecs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Grid container p={6} spacing={3}>
        {carSpecs.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Link to={`/car-spec/${item.id}`}>  
            <Paper
              sx={{
                borderRadius: "10px 10px 0px 0px",
                boxShadow: 0,
                border: "1px solid black",
                 // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Stack direction='column' spacing={2} >
                <Avatar alt="zia" src="/Images/car.png" sx={{borderRadius:0,padding:"10px", height:"100%", width:"100%"}} />
                <Box sx={{color:"white", backgroundColor:"black", padding:"10px", textDecoration:"none !important"}}>
                   <Typography variant='body1'>{item.name}</Typography>
                       <Typography variant='body1'>{item.bodyType}</Typography>
                       <Typography variant='body1'>${item.price}</Typography>
                       
                       {/* <Button variant="contained" sx={{color:"black", backgroundColor:"white", textTransform:"capitalize",}}>More Details</Button> */}
                       
                 </Box>
               
              </Stack>
            </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CarsHomePage;
