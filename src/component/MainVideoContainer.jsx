import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { CheckCircle } from '@mui/icons-material';




const MainVideoContainer = ({ selectedMenu }) => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedMenu}`).then((data) => {
            setVideos(data.items)
        })
    }, [selectedMenu])


    return (
        <>
            <div className='mainVideoContainer p-2 mb-5'>
                <div className='row'>

                    {
                        videos.map((video) => {
                            return video.id.videoId && (
                                <div className='col-lg-4 col-md-6 col-sm-12' key={video.snippet.title}>
                                    <div className="card videoCard shadow  mb-5 bg-body rounded border-0">
                                        <img src={video?.snippet?.thumbnails?.high?.url} alt={video.snippet.title} height='345px' />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{video.snippet.title.slice(0, 60)}</h5>
                                            <p className="card-text fw-bold text-secondary">
                                                {video.snippet.channelTitle.slice(0, 60)}
                                                <CheckCircle color='gary' />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }

                </div>
            </div>
        </>
    )
}

export default MainVideoContainer