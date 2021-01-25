import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-animation.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimaScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const dropMenu = new DropDownMenu("[data-dropdown]");
dropMenu.init();

const menumob = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menumob.init();

const funcinamento = new Funcionamento("[data-semana]", "aberto");
funcinamento.init();

initAnimaScroll();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
