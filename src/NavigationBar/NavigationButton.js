import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavigationButton(props) {
  
  const styles ={navigationButton:{":hover":{backgroundColor:"#FFFFFF66", opacity:"1",}, borderRadius:"8px", margin:"3px"}}

const MatchingIconButton=()=>{

   switch(props.buttonName) {
    case "Dashboard":
      return(
        <ListItemButton sx={styles.navigationButton}>
        <ListItemIcon>
          <SpaceDashboardIcon sx={{color:"#fff"}}/>
        </ListItemIcon>
        <ListItemText primary={props.buttonName} />
      </ListItemButton>
      )
      case "Tables":
        return(
          <ListItemButton sx={styles.navigationButton}>
          <ListItemIcon>
            <BackupTableIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText primary={props.buttonName} />
        </ListItemButton>
        )
        case "Billing":
      return(
        <ListItemButton sx={styles.navigationButton}>
        <ListItemIcon>
          <ReceiptLongIcon sx={{color:"#fff"}}/>
        </ListItemIcon>
        <ListItemText primary={props.buttonName} />
      </ListItemButton>
      )
      case "RTL":
      return(
        <ListItemButton sx={styles.navigationButton}>
        <ListItemIcon>
          <FormatTextdirectionRToLIcon sx={{color:"#fff"}}/>
        </ListItemIcon>
        <ListItemText primary={props.buttonName} />
      </ListItemButton>
      )
      case "Profile":
      return(
        <ListItemButton sx={styles.navigationButton}>
        <ListItemIcon >
          <AccountCircleIcon sx={{color:"#fff"}} />
        </ListItemIcon>
        <ListItemText primary={props.buttonName} />
      </ListItemButton>
      )
      case "Notification":
        return(
          <ListItemButton sx={styles.navigationButton}>
          <ListItemIcon>
            <NotificationsNoneIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText primary={props.buttonName} />
        </ListItemButton>
        )
      case "LogOut":
      return(
        <ListItemButton sx={styles.navigationButton}>
        <ListItemIcon>
          <LogoutIcon sx={{color:"#fff"}}/>
        </ListItemIcon>
        <ListItemText primary={props.buttonName} />
      </ListItemButton>
      )
     

  }
}

  return (
    <div>
       {MatchingIconButton()}
    </div>
  )
}

export default NavigationButton;