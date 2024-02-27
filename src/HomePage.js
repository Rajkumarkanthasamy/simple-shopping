import { AppBar, Box, Button, Container, Grid, IconButton, Link, ListItem, Stack, TextField, Typography ,} from "@mui/material";
import React from "react";
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import NavigationButton from "./NavigationBar/NavigationButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ProductsList from './ProductsList.json';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import "./App.css"

const Root =styled.div `
min-height:98vh;
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000",
    height:"90vh"
  }));

  const ElementItem = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000",
    height:"400px",
    margin:"1%"
  }));
  const FirstItem = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000",
    height:"200px",
    margin:"1%"
  }));

const styles = {
              appBarBox:{ flexGrow: 1, position: "-webkit-sticky",position:"sticky",top:"0px", height:"10%", width:"95%",marginLeft:"auto", marginRight:"auto", marginTop:"1%",},
              appBar:{backgroundColor:"#FFFFFF88", height:"100%", justifyContent:"center", borderRadius:"9px", color:"gray"}
              }   
  

  
const HomePage=()=>{
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
    return(
        <Root style={{backgroundColor:"#FAFAFA",margin:"10px", borderRadius:"7px"}}>
        <Grid container spacing={2} marginTop={"0.1%"} >
        <Grid item xs={2} sx={{position:"sticky"}} >
          <Item sx={{backgroundColor:"#191919", height:"100%",}}>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#191919', color:"#fff"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{color:"#FFF", backgroundColor:"#191919"}}>
          Welcome
        </ListSubheader>
      }>
       <div style={{backgroundColor:"#49a3f1", borderRadius:"8px"}}><NavigationButton  buttonName={"Dashboard"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"Tables"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"Billing"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"RTL"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"Notification"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"Profile"}/></div>
       <div style={{backgroundColor:"", borderRadius:"8px"}}><NavigationButton  buttonName={"LogOut"}/></div>

         </List>
          </Item>
        </Grid>
        <Grid item xs={10} >
          <Item sx={{height:"95vh", overflowY:"scroll"}}>

          <Box sx={styles.appBarBox}>
          <AppBar position="static" sx={styles.appBar}>
               <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop Now
          </Typography>
          <IconButton><CircleNotificationsIcon/></IconButton>
          <IconButton><SettingsIcon/></IconButton>
          <IconButton><AccountCircleIcon/></IconButton>

        </Toolbar>
      </AppBar>
          </Box>
          
            <Grid justifyContent={"center"} alignItems={"center"} container direction={"row"} style={{marginTop:"1%"}}>

              {

                ProductsList.map((productDetails)=>{

                return(

                <Grid   item xs={3.8} margin={1} >

                <Card  sx={{ maxWidth: 500, }} >
      
                  <CardMedia
                    component="img"
                    height="194"
                    image={productDetails.ProductPath}
                    alt="Paella dish"
                    className="productscard"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                     {productDetails.ProductDetails}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  
                  </CardActions>
                  
                </Card>
    
                </Grid>
                )
                
                })
              }
              

            </Grid>
          
          </Item>
        </Grid>
      </Grid>
        
        </Root>
    )
}
export default HomePage;