import React from 'react'
import { Box, Typography, Avatar, TextField } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"

function CalculateNumber() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://st4.depositphotos.com/10866344/22175/v/450/depositphotos_221759756-stock-illustration-simple-icon-to-represent-the.jpg'} sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h5' sx={{ textAlign: 'center', mt: '2' }}>
            เครื่องคิดเลข
          </Typography>
          <Typography sx={{ mt: 2 }}>
            ตัวเลขตัวที่ 1
          </Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <Typography sx={{ mt: 2 }}>
            ตัวเลขตัวที่ 2
          </Typography>
          <TextField variant="outlined" fullWidth type="number" />

          <Typography sx={{ mt: 2 }}>
            เลือกเครื่องหมายคำนวณ
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>เครื่องหมาย</InputLabel>
            <Select defaultValue={'+'}>
              <MenuItem value={'+'}> + บวก</MenuItem>
              <MenuItem value={'-'}> - ลบ</MenuItem>
              <MenuItem value={'x'}> x คูณ</MenuItem>
              <MenuItem value={'÷'}> ÷ หาร</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant='contained' sx={{ mt: 3, backgroundColor: '#ef6c00', height: 50 }}>
            <Typography sx={{ mt: 2 ,textAlign: 'center'}}>
              คํานวณ
            </Typography>
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 4, color: 'red', fontsize: 100 }}>
            0.00
          </Typography>
        </Box>
      </Box >
    </>
  )
}

export default CalculateNumber
