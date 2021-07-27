export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this.createSlider();
    this.carouselMechanics();
  }

  createSlider () {
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = `
          <div class="carousel__arrow carousel__arrow_right">
            <img src="./../../assets/images/icons/angle-icon.svg" alt="icon" />
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="./../../assets/images/icons/angle-left-icon.svg" alt="icon" />
          </div>
          <div class="carousel__inner"></div>
    `;
    let items = this.slides;
    let carouselInner = this.elem.getElementsByClassName('carousel__inner')[0];
    for (let i = 0; i < items.length; i++) {
      let card = document.createElement('div');
      card.classList.add('carousel__slide');
      card.setAttribute('data-id', `${items[i].id}`);
      card.innerHTML = this.createSlideCard({
        image: items[i].image,
        price: items[i].price,
        name: items[i].name
      });
      carouselInner.append(card);
      let button = card.getElementsByClassName('carousel__button');
      button.addEventListener('click', () => {
        this.dispatchProductAddEvent(items[i].id);
      });
    }
    this.updateSlider();
  }

  createSlideCard({image, price, name}) {
    return `
        <img src="./../../assets/images/carousel/${image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
                <img src="./../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
  `;
  }

  dispatchProductAddEvent(id) {
    let event = new CustomEvent("product-add", {
      detail: id,
      bubbles: true
    });
    document.getElementsByClassName('container').dispatchEvent(event);
  }

  updateSlider() {
    let offset = -this.elem.offsetWidth * this.currentSlide;
    this.elem.querySelector(`.carousel__inner`).style.transform = `translateX(${offset}px)`;

    if (this.currentSlide === this.slides.length - 1) {
      this.elem.querySelector(`.carousel__arrow_right`).style.display = 'none';
    } else {
      this.elem.querySelector(`.carousel__arrow_right`).style.display = '';
    }

    if (this.currentSlide === 0) {
      this.elem.querySelector(`.carousel__arrow_left`).style.display = 'none';
    } else {
      this.elem.querySelector(`.carousel__arrow_left`).style.display = '';
    }
  }

  carouselMechanics() {
    this.elem.querySelector(`.carousel__arrow_right`).onclick = () => {
      this.currentSlide++;
      this.updateSlider();
    };
    this.elem.querySelector(`.carousel__arrow_left`).onclick = () => {
      this.currentSlide--;
      this.updateSlider();
    };
  }
}
