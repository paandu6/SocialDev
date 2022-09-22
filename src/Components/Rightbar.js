import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../Assets/tree.jpg";
import man from "../Assets/mn.jpg";
import ma2 from "../Assets/mn2.webp";

function Rightbar() {
  return (
    <Box padding={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography>Online Friends</Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src={man} />
          <Avatar alt="Travis Howard" src={ma2} />
          <Avatar alt="Remy Sharp" src={man} />
          <Avatar alt="Travis Howard" src={ma2} />
          <Avatar alt="Remy Sharp" src={man} />
          <Avatar alt="Travis Howard" src={ma2} />
        </AvatarGroup>
        <Typography mt={3} mb={3}>
          Recent Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={img} alt="Recent Posts" />
          </ImageListItem>

          <ImageListItem>
            <img src={img} alt="Recent Posts" />
          </ImageListItem>

          <ImageListItem>
            <img src={img} alt="Recent Posts" />
          </ImageListItem>
        </ImageList>

        <Typography mt={3} mb={3}>
          Recent Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={man} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={ma2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={man} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default Rightbar;
