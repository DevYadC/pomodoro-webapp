import "./TomatoIcon.css";

export default function TomatoIcon({ time }) {
    return (
        <div className="TomatoIcon">
            <img
                src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49707/tomato-emoji-clipart-sm.png"
                alt="Tomato"
            />
            <span class="number">{time}</span>
        </div>
    );
}
