import Popup from "./modules/Popup";

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1200,
  note: 1440,
  desktopLg: 1600,
}

export const SLIDERS = {
  'news-list': {
    options: {
      mediaQuery: 'min',
      gap: '2rem',
      pagination: false,
      fixedWidth: '30.6rem',
      padding: {left: '2rem', right: '5rem'},
      arrows: false,
      breakpoints: {
        [BREAKPOINTS.desktop]: {
          perPage: 3,
          fixedWidth: false,
          padding: null,
          arrows: true,
        }
      }
    },
    callbacks: {
      mounted(slider) {
        const { perPage } = slider._options;
        const slidesCount = slider.Components.Slides.getLength();
        if(slidesCount > perPage) return

        slider._options.arrows = false

        console.log(slider);
      }
    },
  },
  'good-main': {
    options: {
      perPage: 1,
      pagination: false,
      perMove: 1,
      gap: '2rem',
      padding: '2rem'
    },
    callbacks: {},
    asNavFor: 'good-thumbnails',
  },
  'good-thumbnails': {
    options: {
      perPage: 3,
      arrows: false,
      pagination: false,
      perMove: 1,
      isNavigation: true,
      focus: 'center',
    },
    callbacks: {},
    asNavFor: 'good-main',
  },
  'good-set': {
    options: {
      gap: 20,
      perMove: 1,
      mediaQuery: 'min',
      pagination: false,
      fixedWidth: '30rem',
      arrows: false,
      padding: 20,
      breakpoints: {
        [BREAKPOINTS.tablet]: {
          padding: 24,
        },
        [BREAKPOINTS.desktop]: {
          fixedWidth: false,
          perPage: 3,
          arrows: true,
          padding: false
        }
      }
    }
  }
}

export const PLACEMARKS = [
  {
    coords: [55.888942, 37.595195],
    properties: {},
    options: {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/placemark.svg',
      // iconImageHref: `${BASE_URL}/upload/static/img/placemark.svg`,
      iconImageSize: [40, 50],
      iconImageOffset: [-20, -50]
    },
  }
];

export const FORMS = {
  'feedback': {
    onSuccess() {
      Popup.open('feedback-success-popup')
    }
  }
}

