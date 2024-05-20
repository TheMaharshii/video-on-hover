document.addEventListener('DOMContentLoaded', function () {
    const hoverDiv = document.querySelector('.hover-div');
    const hoverVideo = document.querySelector('.hover-video');
  
    hoverDiv.addEventListener('mouseenter', function () {
      hoverVideo.style.display = 'block';
      hoverVideo.play();
    });
  
    hoverDiv.addEventListener('mouseleave', function () {
      hoverVideo.style.display = 'none';
      hoverVideo.pause();
      hoverVideo.currentTime = 0; // Reset video to the beginning
    });
  });
  