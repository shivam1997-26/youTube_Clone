import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { categories } from '../utils/constants';
import { Box, Stack } from '@mui/material';

const menu = [
    { title: 'Home', icon: <MdHomeFilled size={25} /> },
    { title: 'Shorts', icon: <SiYoutubeshorts size={25} /> },
    { title: 'Subscriptions', icon: <MdSubscriptions size={25} /> },
    { title: 'Trending', icon: <FiTrendingUp size={25} /> },
    { title: 'Music', icon: <IoMdMusicalNote size={25} /> },
    { title: 'History', icon: <FaHistory size={25} /> }
]
const MainSidebar = ({selectedMenu,handleMenu,setSelectedMenu}) => {

    return (
        <>
            <Stack direction='row' sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%'}, flexDirection: { md: "column" } } }>

                {
                    categories.map((item) => {
                        return (
                            <div className='sidebarContainer' key={item.name}>
                                <span className=''>{item.icon}</span>
                                <span className='menuTitle' onClick={()=>{handleMenu(item.name)}}>{item.name}</span>
                            </div>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default MainSidebar