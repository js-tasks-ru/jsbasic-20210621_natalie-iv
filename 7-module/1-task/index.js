export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.innerHTML = `
          <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
            <img src="./../../assets/images/icons/angle-icon.svg" alt="icon">
          </button>
          <nav class="ribbon__inner"></nav>
          <button class="ribbon__arrow ribbon__arrow_right">
            <img src="./../../assets/images/icons/angle-icon.svg" alt="icon">
          </button>
    `;
    let links = this.categories.map(item => this.createLinkElement(item.id, item.name));
    this.elem.querySelector('.ribbon__inner').append(...links);
    this.update();
  }

  createLinkElement(id, name) {
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('data-id', `${id}`);
    link.classList.add('ribbon__item');
    link.innerHTML = `${name}`;
    return link;
  }

  update() {
    let arrowLeft = this.elem.querySelector(`.ribbon__arrow_left`);
    let arrowRight = this.elem.querySelector(`.ribbon__arrow_right`);
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollRight === 0) {
      arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      arrowRight.classList.add('ribbon__arrow_visible');
    }

    if (scrollLeft === 0) {
      arrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
      arrowLeft.classList.add('ribbon__arrow_visible');
    }
  }

  addEventListeners() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.elem.onclick = ({target}) => {
      let link = target.closest('.ribbon__item');
      if (link) {
        let id = target.closest('[data-id]').dataset.id;
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: id,
          bubbles: true
        }));
      }
      if (target.closest('.ribbon__arrow_right')) {
        ribbonInner.scrollBy(350, 0);
        this.update();
      }
      if (target.closest('.ribbon__arrow_left')) {
        ribbonInner.scrollBy(-350, 0);
        this.update();
      }
    };
  }
}
