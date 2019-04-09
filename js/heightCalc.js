const footer = document.querySelector('#main_foot');
const arrowCont = document.querySelector('.backTop');
const arrow = document.querySelector('#arrowBackTop');

const getHeight = () => {

    const footHeight = footer.offsetHeight;
    arrowCont.style.height = footHeight + 'px';
}

arrow.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

getHeight();
