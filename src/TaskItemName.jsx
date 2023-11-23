import Chip from '@mui/material/Chip';

export default function TaskName({ taskName }) {
    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
                    marginTop: '5px'
                }}
            />
        </div>
    );
}
