function readMore() {
    
    var containers = document.querySelectorAll('.ingredients__hover-container');

    containers.forEach((container) => {
        var btn = container.querySelector('.morebtn');
        var hbtns = container.querySelector('.ingredients__hover-btns');
        var htitle = container.querySelector('.ingredients__hover-title');
        var dots = btn.querySelector('.dots');
        var more = btn.querySelector('.more');

        btn.addEventListener('click' , () => {
            if(dots.style.display === 'none') {
                dots.style.display='inline';
                more.style.display='none';
                hbtns.style.display='block';
                htitle.style.display='block';
            } else {
                dots.style.display='none';
                more.style.display='inline';
                hbtns.style.display='none';
                htitle.style.display='none';
            }
        })
    }) 
}

document.addEventListener("DOMContentLoaded", readMore);