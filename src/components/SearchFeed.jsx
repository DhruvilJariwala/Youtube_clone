import {useState,useEffect} from 'react'
import { Box,Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import {fetchFromApi} from '../utils/fetchFromApi.js'

function SearchFeed() {
  const [videos, setVideos] = useState([])
  const {text}= useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${text}`).then((data)=>setVideos(data.items))
  
  }, [text])
  


  return (
    <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:"2", marginLeft:{sm: "100px"}}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"white"}}>
    Search Result For: <span style={{color:"#f31503",}}>{text}</span> Videos
    </Typography>
    <Videos videos={videos} marginLeft={6}/>
</Box>
  )
}

export default SearchFeed
