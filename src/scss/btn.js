function createBtn(text) {
  const universalBtn = document.createElement('button');
  universalBtn.textContent = text;
  universalBtn.classList.add('first_btn');
  return universalBtn;
}

export default createBtn;
