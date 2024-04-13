import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = (props) => {
    const { videos } = props
    return (
        <>
            <Stack direction='row' flexWrap="wrap" justifyContent="start" gap={2}>
                {
                    videos.map((video, idx) => (
                        <Box key={idx}>
                            {video.id.videoId && <VideoCard video={video} />}
                            {video.id.channelId && <ChannelCard channelDetail={video} />}
                        </Box>
                    ))
                }
            </Stack>
        </>
    )
}

export default Videos