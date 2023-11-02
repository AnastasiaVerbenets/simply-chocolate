function readMore() {
    var dots = document.getElementsByClassName('dots');
    var more = document.getElementsByClassName('more');

    if(dots.style.display === 'none') {
        dots.style.display='inline';
        more.style.display='none';
    } else {
        dots.style.display='none';
        more.style.display='inline';
    }
}