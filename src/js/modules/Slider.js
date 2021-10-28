import Splide from "@splidejs/splide";
import { sliders as config } from "../config";

export default class Slider {
  constructor() {
    this._init();
  }

  _init() {
    document.querySelectorAll('.js-slider').forEach(slider => {
      const name = slider.dataset.name;
      const splide = new Splide(slider, config[name].options);

      this._addCallbacks(splide, config[name].callbacks);

      splide.mount();

      if(splide.options.perPage >= splide.length) {
        splide.options = {
          ...splide.options,
          arrows: false
        };
        Object.keys(splide.options.breakpoints).forEach(breakpoint => {
          splide.options.breakpoints[breakpoint].arrows = false
        })
      }
    })
  }

  _addCallbacks(slider, callbacks) {
    Object.entries(callbacks).forEach(([cbName, cbFn]) => {
      slider.on(cbName, () => cbFn(slider));
    })
  }
}
