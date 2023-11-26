import Chip from '@mui/material/Chip';

export default function TaskName({ taskName }) {

    const randColors = ['#666A86', '#788AA3', '#92B6B1']
    const getRandomColor = () => {
        const randNum = Math.floor(Math.random() * 3);
        const randColor = randColors[randNum];

        return randColor;
    };

    // Generate a random color for each component instance
    const chipColor = getRandomColor();

    return (
        <div className="TaskName">
            <Chip
                label={taskName}
                style={{
                    backgroundColor: chipColor, // Use random color
                    color: 'white', // Assuming white text works well with random background colors
                    marginTop: '5px',
                    boxShadow: '3px 3px 5px hsla(0, 0%, 0%, 0.5)',
                    border: '1px solid black',
                    fontSize: '18px',
                    fontWeight: 'bold',

                }}
            />
        </div>
    );
}
