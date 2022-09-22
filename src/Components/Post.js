import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img from '../Assets/tree.jpg'
import ma2 from '../Assets/mn2.webp'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
function Post(){
    return(
        <Card sx={{margin:5}}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe" src={ma2}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Jhon Snow"
        subheader="September 10, 2022"
      />
      <CardMedia
        component="img"
        height='20%'
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions>
    </Card>
    )
}
export default Post