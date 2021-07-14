function initCarousel() {
  let arrowLeft = document.getElementsByClassName('carousel__arrow_left')[0];
  arrowLeft.style.display = 'none';
  let arrowRight = document.getElementsByClassName('carousel__arrow_right')[0];
  arrowRight.style.display = '';
  const sliderWrapper = document.getElementsByClassName('carousel__inner')[0];
  const sliderWrapperLength = sliderWrapper.children.length ;
  const slideWidth = sliderWrapper.children[0].offsetWidth;
  let current = 1;
  let width = 0;
  arrowLeft.addEventListener('click', function () {
    if (current > 0) {
      width = width + slideWidth;
      sliderWrapper.style.transform = `translateX(${width}px)`;
      --current;
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
      if (current <= 0) {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = '';
      }
    }
  });
  arrowRight.addEventListener('click', function () {
    if (current < sliderWrapperLength) {
      width = -slideWidth * current;
      sliderWrapper.style.transform = `translateX(${width}px)`;
      ++current;
      arrowRight.style.display = '';
      arrowLeft.style.display = '';
      if (current >= sliderWrapperLength) {
        arrowRight.style.display = 'none';
        arrowLeft.style.display = '';
        --current;
      }
    }
  });
}
