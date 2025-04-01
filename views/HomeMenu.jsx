import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'

function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://st4.depositphotos.com/10866344/22175/v/450/depositphotos_221759756-stock-illustration-simple-icon-to-represent-the.jpg'} sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h3' sx={{ textAlign: 'center', mt: '2' }}>
            IoT Calculate by Natt SAU
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default HomeMenu
