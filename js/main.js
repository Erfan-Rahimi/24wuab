// Initialize theme index
let themeIndex = 1;

// List of themes
const themes = [
    { textColor: 'rgba(0, 0, 0, 0.8)', linkColor: '#304D2E', logoColor: '#304D2E', textBackground: 'white', bgColor: 'black', videoSrc: '/img/THE_RING_CURSED_VIDEO_TAPE_VHS_Original_High_Quality_FU_uvZrA5w7f9E.mp4' },
    { textColor: 'rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Akira_1988_Trailer_nA8KmHC2Z-g_137.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Everything_Everywhere_All_At_Once_Official_Trailer_HD_A_wxN1T1uxQ2g.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Mandarines.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Muhammed.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Oldboy.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Sputnik.mp4' },
    { textColor: ' rgba(0, 0, 0, 0.8)', linkColor: '#E1D4C0', logoColor: '#E1D4C0', textBackground: 'white', bgColor: 'black', videoSrc: '/img/Capernaum.mp4' },
];

// Function to change theme
function changeTheme() {
    const theme = themes[themeIndex];
    document.querySelector('.wrapper').style.backgroundColor = theme.bgColor;
    document.querySelector('header').style.color = theme.logoColor;
    document.querySelectorAll('.header_wrapper nav a').forEach(link => {
        link.style.color = theme.linkColor;
    });    
    document.querySelector('.text_box').style.backgroundColor = theme.textBackground;
    document.querySelector('.text_box').style.color = theme.textColor;
    document.querySelector('video').src = theme.videoSrc;

    const videoElement = document.querySelector('video');
    switch (themeIndex) {
        case 0:
            videoElement.style.width = '100%';
            videoElement.style.height = 'auto';
            break;
        case 1: 
            videoElement.style.width = '70%';
            videoElement.style.height = 'auto';
            break;
        case 2:
            videoElement.style.width= '70%';
            videoElement.style.height= 'auto';
            break;
        case 3:
            videoElement.style.width= '90%';
            videoElement.style.height= 'auto';
        break;
        case 4:
            videoElement.style.width= '80%';
            videoElement.style.height= 'auto';
        break;
        case 5:
            videoElement.style.width= '85%';
            videoElement.style.height= 'auto';
        break;
        case 6:
            videoElement.style.width= '90%';
            videoElement.style.height= 'auto';
        break;
        case 7:
            videoElement.style.width= '90%';
            videoElement.style.height= 'auto';
        break;
        default:
            videoElement.style.width = 'auto';
            videoElement.style.width = 'auto';
        break;
    }
    themeIndex = (themeIndex + 1) % themes.length;
}

// Event listener to change theme when body is clicked
document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName !== 'A' && clickedElement.tagName !== 'BUTTON') {
        changeTheme();
    }
});

/*Navigation */

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {

    event.stopPropagation();

    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
    }
});


/* Nav-Button*/

function myFunction(x) {
    x.classList.toggle("change");
}