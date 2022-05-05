import { Paper, Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import React from "react";
const Card = () => {
  return (
    <>
      <Paper>
        <Grid item container>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Paper
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0px",
              }}
            >
             
              <Typography pt={3} pl={3} pm={3} variant='h4'>
                MODIFY YOUR RIDE
              </Typography>
              <Typography p={3} variant='body2'>
                The Honda Civic is a good compact car . Kicking off the model's
                11th generation, the 2022 Civic builds on everything that has
                made this vehicle one of the most popular small cars around.
              </Typography>
              <Stack p={3} spacing={12} direction="row">
                <Typography  variant='h6'>
                  Range Rover SE
                </Typography>
                <Avatar alt="Remy Sharp"   sx={{ width: "15%", height:"15%", borderRadius:"0px" }} src="Images/Carlogo.png" />
              </Stack>
              <Stack spacing={2} p={3}>
                <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                <Typography variant='body1'>Model Year</Typography>
                <Typography variant='caption'>January 2021</Typography>
                <Typography variant='body1'>Registered Country</Typography>
                <Typography variant='caption'>England</Typography>
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
                <Avatar alt="Remy Sharp"   sx={{ width: "70%", height: "70%", borderRadius:"0px" }} src="Images/car.png" />

                </Box>
               </Stack>
               <Grid item container pl={4} mt={6}>
                   <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                   <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                   </Grid>

                   <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                   <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                   </Grid>

                   <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                   <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                   </Grid>

                   <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                   <Typography variant='body1'>Vehicle Company</Typography>
                <Typography variant='caption'>Land Rover ®</Typography>
                   </Grid>
               </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Card;
