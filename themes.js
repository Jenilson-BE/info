
const themes = [
  {
    primary: "#00ffff",
    accent: "#70ffff",
    secondary: "#f8f8f8",
    background: "#0b0c10",
    backgroundLight: "#1f2833",
    text: "#c5c6c7",
    textLight: "#a1a2a3",
  }
];

const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
export default selectedTheme;
