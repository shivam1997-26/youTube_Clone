import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { IconButton, Paper, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';


const Header = () => {
    return (
        // <div className='headerContainer'>
        //     <div>
        //         <span className='menuIcon'><IoMenu size={35} /></span>
        //         <span className='brandLogo'><img src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png' height='30px' /></span>
        //     </div>
        //     <div className='serchSection'>
        //         <div className='input'>
        //             <input type='text' placeholder='Search' className='searchInput' />
        //             <span className='searchIcon'><IoIosSearch size={35} /></span>
        //         </div>
        //         <span className='inputMic'><IoMdMic size={35} /></span>

        //     </div>
        //     <div className='singinSection'>
        //         <div>
        //             <FaEllipsisVertical size={25} />
        //         </div>
        //         <div className='signInButton'>
        //             <FaRegCircleUser size={25} />
        //             <span style={{ fontSize: '18px' }}>SignIn</span>
        //         </div>
        //     </div>
        // </div>
        <>
            <Stack direction='row' alignItems='center' p={2} sx={{ justifyContent: 'space-between', background: '#000' }}>
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png' height='40px' />
                <Paper sx={{
                    borderRadius: '20px', border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                    mr: { sm: 5 }
                }}>
                    <input placeholder='Search...' className='search-bar' />
                    <IconButton type='submit' sx={{p:'10px',color:'red'}}>
                <Search />
            </IconButton>
                </Paper>
            </Stack>
        </>
    )
}

export default Header