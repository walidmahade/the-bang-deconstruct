const progressBar = document.querySelector('.progress-bar') as HTMLElement;
const { log } = console;

function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const widthToIncrease =
        (100 / (scrollHeight - window.innerHeight)) * scrollTop;
    log(widthToIncrease);
    progressBar.style.width = widthToIncrease + '%';
}

/*
scrollHeight(a px value) = 100%
1 = 100 / scrollHeight
scrollTop = (100 / scrollHeight) * scrollTop

*/

window.addEventListener('scroll', updateProgressBar);
