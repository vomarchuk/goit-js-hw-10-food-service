import menu from '../menu';
import templatesMenu from '../templates/menu.hbs';
import { refs } from './_refs';

const markupMenu = templatesMenu(menu);

refs.listMenu.insertAdjacentHTML('beforeend', markupMenu);
