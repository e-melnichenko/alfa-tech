import Splide from "@splidejs/splide";
import { SLIDERS } from "../config";

export default class Slider {
  constructor() {
    this.activatedAsNav = [];
    this._init();
  }

  _init() {
    document.querySelectorAll('.js-slider').forEach(slider => {
      const name = slider.dataset.name;
      if(this.activatedAsNav.includes(name)) return

      const splide = new Splide(slider, SLIDERS[name].options);
      this._addCallbacks(splide, SLIDERS[name].callbacks);

      if(SLIDERS[name].asNavFor) {
        const secondConfig = SLIDERS[SLIDERS[name].asNavFor].options;
        const secondSliderElem = document.querySelector(`.js-slider[data-name="${SLIDERS[name].asNavFor}"]`);
        const secondSlider = new Splide(secondSliderElem, secondConfig);
        splide.sync(secondSlider);
        splide.mount();
        secondSlider.mount();
        window.primaty = splide;
        window.secondary = secondSlider;
        this.activatedAsNav.push(SLIDERS[name].asNavFor)

        if(secondSlider.options.perPage >= secondSlider.length) {
          secondSlider.options = {
            ...secondSlider.options,
            arrows: false
          };
          Object.keys(secondSlider.options.breakpoints || {}).forEach(breakpoint => {
            secondSlider.options.breakpoints[breakpoint].arrows = false
          })
        }
      } else {
        splide.mount();

        if(splide.options.perPage >= splide.length) {
          splide.options = {
            ...splide.options,
            arrows: false
          };
          Object.keys(splide.options.breakpoints || {}).forEach(breakpoint => {
            splide.options.breakpoints[breakpoint].arrows = false
          })
        }
      }
    })
  }

  _addCallbacks(slider, callbacks) {
    Object.entries(callbacks).forEach(([cbName, cbFn]) => {
      slider.on(cbName, () => cbFn(slider));
    })
  }
}
