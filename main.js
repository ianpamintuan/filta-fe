import './reboot.css';
import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { Gallery } from './components/Gallery';

document.querySelector('#app').innerHTML = `
  <div class="container">
    ${Gallery()}
  </div>
`;

setupCounter(document.querySelector('#counter'));
