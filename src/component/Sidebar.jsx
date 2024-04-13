import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = (props) => {
    const { selectedCategory, setSelectedCategory } = props
    const selectedCotegory = 'New'
    return (
        <Stack direction="row" sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%'}, flexDirection: { md: "column" } } }>
            {
                categories.map((category) => (
                    <button className='category-btn' onClick={() => setSelectedCategory(category.name)} key={category.name} style={{ background: category.name == selectedCotegory && '#FC1503', color: 'white' }}>
                        <span style={{ color: category.name == selectedCotegory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}

export default Sidebar