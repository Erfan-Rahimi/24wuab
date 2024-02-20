// Initialize theme index
let themeIndex = 0;

// List of themes
const themes = [
    { textColor: '#7c0200', linkColor: '#304D2E', logoColor: '#304D2E', textBackground: '#304D2E', bgColor: '#black', videoSrc: '/img/THE_RING_CURSED_VIDEO_TAPE_VHS_Original_High_Quality_FU_uvZrA5w7f9E.mp4' },
    { textColor: '#E1D4C0', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: '#BD5FB5', bgColor: '#black', videoSrc: '/img/THE_RING_CURSED_VIDEO_TAPE_VHS_Original_High_Quality_FU_uvZrA5w7f9E.mp4' },
];

// Function to change theme
function changeTheme() {
    const theme = themes[themeIndex];
    document.querySelector('.wrapper').style.backgroundColor = theme.bgColor;
    document.querySelector('header').style.color = theme.logoColor;
    document.querySelectorAll('.header_wrapper nav a').forEach(link => {
        link.style.color = theme.linkColor;
    });    document.querySelector('.text_box').style.backgroundColor = theme.textBackground;
    document.querySelector('.text_box').style.color = theme.textColor;
    document.querySelector('video').src = theme.videoSrc;
    themeIndex = (themeIndex + 1) % themes.length;
}

// Event listener to change theme when body is clicked
document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName !== 'A') {
        changeTheme();
    }
});
