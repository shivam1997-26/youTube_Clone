import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video }) => {
  console.log('video', video)
  return (
    <Card sx={{ width: { md: '320px', sx: '100%' } }}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{ width: 358, height: 180 }}
          height="300"
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video.snippet.title}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight='bold' color='#FFF'>
            {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={video.snippet.channelId ? `/channel/${video.snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight='bold' color='gray'>
            {video.snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;