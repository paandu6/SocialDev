import { AppBar, Toolbar,styled, Typography, InputBase, Menu, MenuItem } from "@mui/material"
import { Box } from "@mui/system"
import { Badge,Avatar } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import ma2 from '../Assets/mn2.webp'

const Styledtoolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-around'

})
const Search=styled('div')({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:'5px',
    width:'40%'
})
const Icons=styled(Box)({
    display:'flex',
    gap:'20px',
    alignItems:'center'
})

function Navbar(){
    const [open,setopen]=useState(false)
    return(
        <AppBar position="sticky">
            <Styledtoolbar>
                <Typography sx={{display:{xs:'none', sm:'block'}}} >
                    Social Dev
                </Typography>
                <LogoDevIcon sx={{display:{xs:'block', sm:'none'}}} />
                <Search>
                    <InputBase placeholder="Search...."></InputBase>
                </Search>
                <Icons>
                <Badge badgeContent={4} color="error" sx={{display:{xs:'none',sm:'block'}}}>
                    <EmailIcon sx={{color:'white'}} />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon sx={{color:'white'}} />
                </Badge>
                <Avatar sx={{height:30,width:30}} alt="Remy Sharp" src={ma2} onClick={e=>setopen(true)} />
                </Icons>
                <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setopen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
            </Styledtoolbar>
            </AppBar>
    )
}
export default Navbar