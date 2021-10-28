import { PLACEMARKS } from "../config";
import YMap from "./YMap";

export default function initContactsMap() {
  const container = document.querySelector('.js-map');
  if(typeof ymaps === 'undefined' || !container) return

  ymaps.ready(() => {
    const contactsMap = new YMap('contacts-map', {
      center: PLACEMARKS[0]?.coords,
      zoom: 16,
      controls: ['zoomControl'],
    });

    PLACEMARKS.forEach(config => contactsMap.addPlacemark(config))
  })
}
