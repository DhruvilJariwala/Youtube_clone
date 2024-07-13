import {useState,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box,Typography,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Videos from "./Videos"
import {fetchFromApi} from "../utils/fetchFromApi.js"
function VideoDetail() {
  const [VideoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id}= useParams();

    useEffect(() => {
          fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));

          fetchFromApi(`search?part=snippt&relatedToVideoId=${id}&type=video`)
          .then((data)=>setVideos(data.items))
    }, [id])

    if(!VideoDetail?.snippet)return "Loading.....";
    console.log(VideoDetail)
const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=VideoDetail;

  return (
    <Box minHeight="95vh">
    <Stack direction={{xs:"column",md:"row"}}>
      <Box flex={1}>
        <Box sx={{width:"100%", position:"sticky", top:"86px"}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color="white" variant='h5' fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{
            color:"white",
          }}
          py={1}
          px={2}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{sm:'subtitle1',md:"h6"}} color="white">
              {channelTitle}
              <CheckCircle sx={{fontSize:"12px", color:"grey", ml:"5px"}}/>
            </Typography>
          </Link>
          <Stack direction="row" gap="20px" alignItems="center" >
            <Typography variant='body1' sx={{opacity:0.7}}>
              {parseInt(viewCount).toLocaleString()} Views
            </Typography>
            <Typography variant='body1' sx={{opacity:0.7}}>
              {parseInt(likeCount).toLocaleString()} Likes
            </Typography>
          </Stack>
          </Stack>
        </Box>
      </Box>

      <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column"/>
      </Box>
    </Stack>
    </Box>
  )
}

export default VideoDetail
