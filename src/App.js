import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Stack } from '@mui/material';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import { Box } from "@mui/material"

function App() {
  return (

      <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent='space-between'>
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
      <Add />
      </Box>

  );
}

export default App;
