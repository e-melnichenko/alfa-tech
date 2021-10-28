import { placemarkList } from "../config";
import YMap from "./YMap";

export default function initContactsMap() {
  const container = document.querySelector('.js-map');
  if(typeof ymaps === 'undefined' || !container) return

  ymaps.ready(() => {
    const contactsMap = new YMap('contacts-map', {
      center: placemarkList[0]?.coords,
      zoom: 16,
      controls: ['zoomControl'],
    });

    placemarkList.forEach(config => contactsMap.addPlacemark(config))
  })
}
