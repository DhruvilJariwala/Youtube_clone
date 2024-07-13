import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {demoThumbnailUrl} from "../utils/constants.js"
const VideoCard = ({video: {  id: { videoId },snippet}}) => {
  return (
    <Card
      sx={{
        width: {  xs: "100%",sm:"358px" ,md: "320px"},
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
    <Link to={`/video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{width:{
              xs:"100%",sm:"358px",md:"320px"}, height:"180px"}}
            component="div"
        />
    </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "70px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 10, color: "grey", ml: "5px",mt:"3px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
