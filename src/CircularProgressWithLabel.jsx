import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CircularProgressWithLabel({ value, count }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Format the remaining time (assuming count is in seconds)
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const circularSize = windowWidth > 800 ? 500 : 400; // Size changes based on window width

    return (
        <div className='CircularProgress'>
            <Box position="relative" display="inline-flex">
                <CircularProgress
                    variant="determinate"
                    value={value}
                    sx={{ color: "#d1495b" }}
                    size={circularSize} // Use the dynamic size
                />
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
                    <Typography
                        variant="caption"
                        component="div"
                        color="textPrimary"
                        style={{ color: 'white', fontSize: '28px' }}
                    >
                        {`${minutes}:${seconds.toString().padStart(2, '0')}`}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}
