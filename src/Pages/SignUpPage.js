import { AppBar, Box, Button, Container, Grid, IconButton, Link, ListItem, Stack, TextField, Typography ,} from "@mui/material";
import React from "react";
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
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
  

  const styles = {
    container: {
        backgroundImage: `url(./BackGroundSignup.jpeg)`,
        backgroundPosition: 'top',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    }
};

//style={{backgroundImage:`url(./BackGroundSignup.jpg)`,backgroundSize:"contain",backgroundRepeat:"no-repeat",}}
const LoginPage=()=>{
    const navigator =useNavigate()
    return(
        <Root style={styles.container} >
        <Container   maxWidth={'xs'} >
         
            <Stack justifyContent={'center'}
                alignItems={'center'}
                minHeight={'70vh'}
                marginTop={"35%"}
                spacing={5}
                sx={{backgroundColor:"#FFF", borderRadius:"8px"}}
                >
                <Paper elevation={5} style={{width:"88%", height:"20vh", backgroundColor:"#1976d2", marginTop:"-40%"}}  >
                <Grid height={"100%"} color={"#fff"} container  direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
                      <Grid   >
                        <Typography style={{fontSize:"2vw", fontWeight:"bolder"}}>Join us today</Typography>
                      </Grid>
                      <Grid  >
                      <Typography >Enter your email and password to register</Typography>
                      </Grid>     
                  </Grid>
                </Paper>
                <TextField id="outlined-basic"  size="small" label="User Name" variant="outlined" style={{width:"75%", maxHeight:"40px"}} /> 
                <TextField id="outlined-basic"  size="small" label="Email" variant="outlined" style={{width:"75%", maxHeight:"40px"}} />
                <TextField id="outlined-basic"  size="small" label="Password" variant="outlined"  style={{width:"75%", maxHeight:"40px"}}/>
                <Button variant="contained" style={{width:"75%", maxHeight:"40px"}}>Sign up</Button>
                <Grid display={"flex"}>
                <Typography>Already have an account ?  </Typography>
                <Link onClick={()=>navigator('/')} style={{textDecoration:"none"}}><Typography sx={{cursor:"pointer"}}>&nbsp;sign in</Typography></Link>
                </Grid>
            </Stack>
        </Container>
        </Root>
    )
}
export default LoginPage;