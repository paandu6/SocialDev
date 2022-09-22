import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Add(){
   const [open,setopen]= useState(false)
   const StyledModal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
   })
   const UserBox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    mb:15
   })
    return(
        <>
            <Tooltip onClick={e=>setopen(true)}
            title="Add" sx={{position:'fixed', bottom:20, left:{xs:'calc(50% - 25px)', md:30}}}>
            <Fab color="primary"  aria-label="add" >
            <AddIcon  />
            </Fab>
            </Tooltip>

            <StyledModal
            open={open}
            onClose={(e)=>setopen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={250} borderRadius={5} backgroundColor="white" p={3} >
                <Typography textAlign='center'>Create New Post</Typography>
                <UserBox>
                    <Avatar sx={{height:30,width:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography>Jhon Snow</Typography>
                </UserBox>
                <TextField
                    sx={{width:'100%'}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's Going On"
                    variant="standard"
                    />
                    <Stack direction='row' mt={3} mb={3} gap={1}>
                        <EmojiEmotionsIcon color="primary" />
                        <AddPhotoAlternateIcon color="secondary" />
                        <VideoCallIcon color="primary" />
                        <PersonAddAlt1Icon color="secondary" />
                    </Stack>
                    <ButtonGroup fullWidth
                    
                    variant="contained" aria-label="outlined primary button group">
                        <Button >Post</Button>
                        <Button sx={{width:'100px'}}>
                            <CalendarMonthIcon />
                        </Button>
                        </ButtonGroup>
            </Box>
            </StyledModal>
        </>
    )
}
export default Add