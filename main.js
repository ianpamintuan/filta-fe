import './reboot.css';
import './style.css';
import { Gallery } from './components/Gallery';
import BlogSection from './components/BlogSection/BlogSection';

document.querySelector('#app').innerHTML = `
  <div class="container">
    ${Gallery()}
    ${BlogSection()}
  </div>
`;
