import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#2E1D1E',
        color: 'white',
        textAlign: 'left',
        padding: '10px',
        marginTop: 68.3
      }}
    >
      <Typography variant="body1" sx={{marginLeft: 20}}>
        Copyright © 2020, Bookstore Private Limited. All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
