import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function () {




    return (
        <div className="WhyPage" style={{ margin: '10px', color: '#666A86', fontWeight: 'bold' }}>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '5%',
                    '& > :not(style)': {
                        m: 1,
                        width: 600,
                        height: 'auto',


                    },
                }}
            >
                <Paper style={{ backgroundColor: '#666A86' }} elevation={3} ><div className="WhyParagraph" style={{ margin: '10px', color: '#EEEEEE', fontWeight: 'bold', fontSize: '25px' }}>
                    <h1>Why?</h1>

                    <p>
                        When I started learning to code, I discovered the Pomodoro method to be incredibly effective. Yet, I felt something was missing, a way to track my progress. My solution was to draw little tomatoes after each completed session. This simple act of tracking inspired me to develop this app, my second coding project. It was both a fun and enlightening journey.
                    </p>
                    <p>
                        I hope you find this app enjoyable and useful. Wishing you the best in your endeavors.
                    </p>
                    <p>
                        Created with love by Yadpreet.🍅
                    </p>

                </div></Paper>

            </Box>


        </div>
    )
}