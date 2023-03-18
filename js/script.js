import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scroll = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initAnimacaoScroll();

const modal = new Modal ('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init();

initTabNav();

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
