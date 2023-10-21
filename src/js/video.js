function handleVideo() {
  const videoElement = document.querySelector('.made__video');
  const imgElement = document.querySelector('.made__img-wrapper');

  imgElement.addEventListener('click', () => {
    videoElement.style.display = 'block';
    imgElement.style.display = 'none';
    videoElement.src += '&autoplay=1';
  });
}

document.addEventListener("DOMContentLoaded", handleVideo);
