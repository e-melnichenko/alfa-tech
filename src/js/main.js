import svg4everybody from 'svg4everybody';
import initContactsMap from './modules/contactsMap';
import CssVars from './modules/CssVars';
import Slider from './modules/Slider';
import Tabs from './modules/Tabs';
import initToggleMenu from './modules/toggleMenu';

svg4everybody();

initToggleMenu();
initContactsMap();

new CssVars();
new Tabs();
new Slider();
