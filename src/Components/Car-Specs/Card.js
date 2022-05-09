import { Paper, Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import React from "react";
// import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { useState, useEffect }  from "react";

const Card = () => {
 
  return (
    <>
      <Paper>
        {/* <Box sx={{float:"right", padding:"20px"}}>
        <ImCancelCircle />
        </Box> */}

        <Grid item container>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Paper
              sx={{
                backgroundColor: "black",
                color: "white",
                // borderRadius: "0px 90px 0px 0px",
                // borderRight:"2px solid black",
                borderRadius:"0px"
              }}
            >
             
              <Typography pt={3} pl={3} pm={3} variant='h4'>
                FIND YOUR VEHICLE
              </Typography>
              <Typography p={3} variant='body2'>
              Range Rover achieves a smooth, relaxing drive by adjusting its height through the Electronic Air Suspension. It also lowers the vehicle for easier access to the loadspace, and Automatic Access Height allows for an elegant arrival.

              </Typography>
              

             
              <Stack p={3} spacing={12} direction="row">
                <Typography  variant='h6'>
                  Range Rover SE
                </Typography>
                <Avatar alt="Company-logo" sx={{ width: "15%", height:"15%", borderRadius:"0px" }} src="/Images/Carlogo.png" />
              </Stack>
               <Stack spacing={2} p={3}>
                <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                <Typography variant='body1'>Model Year</Typography>
                <Typography variant='caption'>January 2021</Typography>
                <Typography variant='body1'>Registered Country</Typography>
                <Typography variant='caption'>England</Typography>
                <Typography variant='body1'>Vehicle Identification Number</Typography>
                <Typography variant='caption'>001998475848320</Typography>
                <Typography variant='body1'>Engine</Typography>
                <Typography variant='caption'>2.7 Twin Turbo Petrol</Typography>
                <Typography variant='body1'>Exterior Color</Typography>
                <Typography variant='caption'>Galaxy Blue</Typography>
                <Typography variant='body1'>Body Type</Typography>
                <Typography variant='caption'>SUV</Typography>
              </Stack>
               <Stack></Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <Stack p={3} spacing={6}>
                <Typography  variant='h4'>
                  Range Rover SE
                </Typography>
                <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Avatar alt="Car"   sx={{ width: "70%", height: "70%", borderRadius:"0px" }} src="/Images/car.png" />

                </Box>
               </Stack>
               <Typography pl={4} pt={4} variant="h4">
                 Top Features
               </Typography>

               <Grid item container p={4} spacing={4}>
                   <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                     <Box sx={{borderRadius:"10px", border:"2px solid black", padding:"10px"}}>
                     <Typography variant='body1'>0 to 100</Typography>
                <Typography variant='caption'>6 sec</Typography>
                     </Box>
                  
                   </Grid>

                   <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                   <Box sx={{borderRadius:"10px", border:"2px solid black", padding:"10px"}}>
                   <Typography variant='body1'>Top Speed</Typography>
                <Typography variant='caption'>155 mph</Typography>
                </Box>
                   </Grid>

                   <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                   <Box sx={{borderRadius:"10px", border:"2px solid black", padding:"10px"}}>
                   <Typography variant='body1'>Cruise Control</Typography>
                <Typography variant='caption'>Yes</Typography>
                </Box>
                   </Grid>

                   <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                   <Box sx={{borderRadius:"10px", border:"2px solid black", padding:"10px"}}>
                   <Typography variant='body1'>Moon Roof</Typography>
                <Typography variant='caption'>Yes</Typography>
                </Box>
                   </Grid>
               </Grid>
               <Typography pl={4} variant="h4">
                 About Range Rover SE 
               </Typography>
               <Typography pl={4} pr={4} variant="body1">
               Range Rover achieves a smooth, relaxing drive by adjusting its height through the Electronic Air Suspension. It also lowers the vehicle for easier access to the loadspace, and Automatic Access Height allows for an elegant arrival.
               </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Card;