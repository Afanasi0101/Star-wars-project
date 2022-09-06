import createBtn from './btn';

const root = document.querySelector('#app');
const btn = createBtn('play the game');
root.appendChild(btn);
btn();
