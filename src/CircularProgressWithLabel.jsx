import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

export default function CircularProgressWithLabel({ value, count }) {
    // Format the remaining time (assuming count is in seconds)
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    return (
        <div className='CircularProgress'>
            <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={value} sx={{ color: "#d1495b" }} size={500} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Typography variant="caption" component="div" color="textPrimary" style={{ color: 'white', fontSize: '25px' }}>
                        {`${minutes}:${seconds.toString().padStart(2, '0')}`}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}
