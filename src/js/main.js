import svg4everybody from 'svg4everybody';
import initContactsMap from './modules/contactsMap';
import CssVars from './modules/CssVars';
import initForm from './modules/form';
import initMask from './modules/mask';
import Popup from './modules/Popup';
import Slider from './modules/Slider';
import Tabs from './modules/Tabs';
import initToggleMenu from './modules/toggleMenu';

svg4everybody();

Popup.init();

initToggleMenu();
initContactsMap();
initForm();
initMask();

new CssVars();
new Tabs();
new Slider();
