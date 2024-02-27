import { AppBar, Box, Button, Container, Grid, IconButton, Link, ListItem, Stack, TextField, Typography ,} from "@mui/material";
import React from "react";
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";


const Root =styled.div `
display:flex;
min-height:100vh;
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000"
  }));
  
  
const LoginPage=()=>{

  const navigator =useNavigate();
  const auth = useAuth()
  
   var userdetails={name : "rajkumar", age:22, city:"salem", workDetails:{job:"react developer", place:"bangalore"}};
  var copyUseraDetails={...userdetails,name:"kumar", ...userdetails.workDetails, place:"Delhi"};
  console.log(userdetails);  
  
  
    return(
        <Root style={{backgroundImage:`url(./BackGroundLogin.jpeg)`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <Container  maxWidth={'xs'} >
         
            <Stack justifyContent={'center'}
                alignItems={'center'}
                minHeight={'60vh'}
                marginTop={"35%"}
                spacing={5}
                sx={{backgroundColor:"#FFF", borderRadius:"8px"}}
                >
                <Paper elevation={5} style={{width:"88%", height:"20vh", backgroundColor:"#1976d2", marginTop:"-45%"}}  >
                <Grid height={"100%"} container  direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                      <Grid   >
                        <IconButton><FacebookIcon sx={{color:"#fff"}}/></IconButton>
                      </Grid>
                      <Grid  >
                       <IconButton><GitHubIcon sx={{color:"#fff"}}/></IconButton>
                      </Grid>
                      <Grid  >
                       <IconButton><GoogleIcon sx={{color:"#fff"}}/></IconButton>
                      </Grid>      
                  </Grid>
                </Paper> 
                <TextField id="outlined-basic"  size="small" label="User Name" variant="outlined" style={{width:"75%", maxHeight:"40px"}} />
                <TextField id="outlined-basic"  size="small" label="Password" variant="outlined"  style={{width:"75%", maxHeight:"40px"}}/>
                <Button variant="contained" style={{width:"75%", maxHeight:"40px"}} onClick={()=> { auth.userLogin("value"); navigator("/HomePage", { replace: true });}}>Sign in</Button>
                <Grid display={"flex"}>
                <Typography>Don't have an account? </Typography>
                <Link onClick={()=>navigator("/signup")} style={{textDecoration:"none"}}><Typography sx={{cursor:"pointer", textDecoration:"none"}}> &nbsp;sign up</Typography></Link>
                </Grid>
               
            </Stack>
            <Typography style={{color:"#fff", position:"relative", top:"10%", right:"25vw", fontSize:"0.8vw"}}>© 2023, made with by Creative Tim for a better art.</Typography>
        </Container>
        
        </Root>
    )
}
export default LoginPage;
