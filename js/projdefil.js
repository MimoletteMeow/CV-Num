const sectionProjets = document.querySelector('.section-projets');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let scrollPosition = 0;

function updateArrows() {
    const containerWidth = sectionProjets.parentElement.offsetWidth;
    const maxScroll = sectionProjets.scrollWidth - containerWidth;

    leftArrow.disabled = scrollPosition === 0;
    leftArrow.style.opacity = scrollPosition === 0 ? 0.5 : 1;

    rightArrow.disabled = scrollPosition >= maxScroll;
    rightArrow.style.opacity = scrollPosition >= maxScroll ? 0.5 : 1;
}

function scrollProjects(direction) {
    console.log(direction);
    const containerWidth = sectionProjets.parentElement.offsetWidth;
    const projectWidth = sectionProjets.firstElementChild.offsetWidth + parseInt(getComputedStyle(sectionProjets).gap);

    if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - projectWidth, 0);
    } else if (direction === 'right') {
        scrollPosition = Math.min(scrollPosition + projectWidth, sectionProjets.scrollWidth - containerWidth);
    }

    sectionProjets.style.transform = `translateX(-${scrollPosition}px)`;
    updateArrows();
}

leftArrow.addEventListener('click', () => scrollProjects('left'));
rightArrow.addEventListener('click', () => scrollProjects('right'));

updateArrows();
