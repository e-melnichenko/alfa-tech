import svg4everybody from 'svg4everybody';
import CssVars from './modules/CssVars';
import Tabs from './modules/Tabs';
import initToggleMenu from './modules/toggleMenu';

svg4everybody();

initToggleMenu();

new CssVars();
new Tabs()
