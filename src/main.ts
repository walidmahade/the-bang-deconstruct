import './style.css';
// const { log } = console;

const progressBar = document.querySelector('.bar') as HTMLElement;

function updateProgressBar() {
    const { scrollHeight, scrollTop } = document.documentElement;
    const percentage = (100 / (scrollHeight - window.innerHeight)) * scrollTop;
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

window.addEventListener('scroll', updateProgressBar);

// scrollHeight = 100%
// 1 = 100 / scrollHeight
// scrollTop = (100/scrollHeight) * scrollHeight
