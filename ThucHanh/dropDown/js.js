const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.dropdown__select').onclick= (event) => {
  if ($('.dropdown__list')) {
    $('.dropdown__list').classList.toggle('show');
    $('.dropdown__list').style.animation = 'dropDown linear .3s';
    $('.dropdown__caret').classList.toggle('fa-caret-up');
  }
}

$$('.dropdown__item').forEach((item) => {
  item.onclick = (event) => {
    const text = event.target.querySelector('.dropdown__text').textContent;
    $('.dropdown__selected').textContent = text;
    $('.dropdown__list').classList.remove('show');
    
  }
})

document.addEventListener('click', function(e) {
  console.log(e.target)
  if (!$('.dropdown').contains(e.target)) {
    $('.dropdown__list').classList.remove('show');
    
    
  }
})