import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://st4.depositphotos.com/10866344/22175/v/450/depositphotos_221759756-stock-illustration-simple-icon-to-represent-the.jpg'} sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h5' sx={{ textAlign: 'center', mt: '2' }}>
            IoT Calculate by Natthawut SAU
          </Typography>

          <Link to='/calnum'>
          <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#1976d2' }}>
            <Typography variant='h6'>Calculate Number </Typography>
          </Button>
          </Link>

          <Button component={Link} to='/calmoneyshare' fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#00bfa5' }}>
            <Typography variant='h6'>Calculate Money Share </Typography>
          </Button>


        </Box>
      </Box>
    </>
  )
}

export default HomeMenu
