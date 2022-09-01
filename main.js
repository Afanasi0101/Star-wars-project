import './src/scss/main.scss';

import app from './src/app';
import btn from './src/btn'
import javascriptLogo from './javascript.svg';

document.querySelector('#app').innerHTML = /* html */`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="example-title">Siema!</h1>
    <div class="example-text">
      Tę templatkę możesz usunąć  
    </div>
  </div>
`;

app();

document.querySelector('#btn').innerHTML = 
  `<button class=first_btn>play the game</button>`

btn()
 
