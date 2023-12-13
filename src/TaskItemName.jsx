import Chip from '@mui/material/Chip';

export default function TaskName({ taskName }) {

    const randColors = ['#666A86', '#788AA3', '#92B6B1']
    const getRandomColor = () => {
        const randNum = Math.floor(Math.random() * 3);
        const randColor = randColors[randNum];

        return randColor;
    };

    // Generate a random color for each component instance
    const divColor = getRandomColor();

    return (
        <div className="TaskName" style={{
            backgroundColor: divColor, // Your chip color
            color: 'white',
            marginTop: '5px',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
            border: '1px solid black',
            borderRadius: '16px', // Gives the div rounded corners like a chip
            padding: '0 12px', // Padding inside the chip, adjust as needed
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'inline-flex', // Makes the div inline-level but with flexbox capabilities
            alignItems: 'center', // Centers items vertically inside the chip
            overflow: 'hidden', // Prevents content from spilling out
            wordBreak: 'break-word', // Ensures the text wraps inside the chip
            maxWidth: '130px', // Limits the width of the chip to its parent container
            maxHeight: '100%'
        }}>
            {taskName}
        </div>
    );

}
