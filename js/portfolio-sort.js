const refs = {
  listBtn: document.querySelector('.filter-list'),
  items: document.querySelectorAll('.projects-list__item'),
};

refs.listBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  console.dir(e);
  if (e.target.tagName !== 'BUTTON') {
    return false;
  }
  const filterElem = e.target.dataset['filter'];
  console.log(filterElem);
  refs.items.forEach(item => {
    item.classList.remove('hide');
    if (!item.classList.contains(filterElem) && filterElem !== 'all') {
      item.classList.add('hide');
    }
  });
}
