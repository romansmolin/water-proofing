//HIDE PREHEADER
const preheader = document.querySelector('.preheader')
const preheaderIcon = document.querySelector('.preheader__text .close-icon');

preheaderIcon.addEventListener('click', () => {
    if (preheader) {
        preheader.remove();
    }
})