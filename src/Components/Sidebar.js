import { Box, List, ListItemIcon, ListItemText, Switch } from "@mui/material"
import {ListItemButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function Sidebar(){
    return(
        <Box  padding={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
          <Box position='fixed' >
        <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="MarketPlace" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

      </List>
      </Box>
        </Box>
    )
}
export default Sidebar