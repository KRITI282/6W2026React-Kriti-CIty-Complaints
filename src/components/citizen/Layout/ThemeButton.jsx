import { useTheme } from "../../../context/ThemeContext";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}

export default ThemeButton;
