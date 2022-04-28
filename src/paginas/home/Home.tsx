import React from 'react' ;
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home(){
    return (
        <>
       <Grid container direction="row" justifyContent="center"  alignItems="center" style={{backgroundColor: "#FFF5EE"}}>
           <Grid alignItems="center"  item xs={6}>
               <Box paddingX={20} >
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "IndianRed" , fontWeight: "bold "}}>Seja bem vinda!</Typography>
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "IndianRed" , fontWeight: "bold "}}>Renovando a sua autoestima</Typography>
       </Box>
       <Box display="flex" justifyContent="center">
           <Box marginRight={1} >
               </Box>
               <Button variant="outlined" style={{ borderColor: "grey", backgroundColor: "#FFF5EE", color: "IndianRed"}}>Ver Postagens</Button>
       </Box>
           </Grid>
           <Grid item xs={6} >
               <img src="https://lh5.googleusercontent.com/p/AF1QipPoAWL9R9FgIIpcq49838gEoWPCSt_22pSjDDhX=w600-h321-p-k-no" alt="" width="700px" height="500px" />
           </Grid>
           <Grid xs={12}  style={{ backgroundColor: "Seashell" }} >

           </Grid>
       </Grid>
        </>
    );
}

export default Home;