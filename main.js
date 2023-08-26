import './reboot.css';
import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { Gallery } from './components/Gallery';
import BlogSection from './components/BlogSection/BlogSection';

document.querySelector('#app').innerHTML = `
  <div class="container">
    ${Gallery()}
    ${BlogSection()}
  </div>
`;

setupCounter(document.querySelector('#counter'));
