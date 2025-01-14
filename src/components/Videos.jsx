import { Stack,Box } from "@mui/material"
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

const Videos = ({videos,direction,marginLeft }) => {

  if(!videos?.length) return "Loading...";
  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,index)=>(
            <Box key={index}>
                  {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item} marginLeft={marginLeft || 0}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
