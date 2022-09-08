import createBtn from './btn';

function app() {
  const root = document.querySelector('#app');
  const btn = createBtn('play the game');
  root.appendChild(btn);
}

export default app;
