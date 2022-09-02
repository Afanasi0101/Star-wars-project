function createBtn() {
  const createBtn = document.createElement('button')
  createBtn.innerHTML = 'play the game'
  createBtn.classList.add('first_btn')
  document.querySelector('#app').appendChild(createBtn)
}
export default createBtn


// Pierwszy czy drugi sposób lepszy ??

// const createBtn = () => {
//   const createBtn = document.createElement('button')
//   createBtn.innerHTML = 'play the game'
//   createBtn.classList.add('first_btn')
//   document.querySelector('#app').appendChild(createBtn)
// }