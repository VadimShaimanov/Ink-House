
let tabsBtn = document.querySelectorAll('.tabs');
let tabsItem = document.querySelectorAll('.paintings__grid');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs--active')});
    e.currentTarget.classList.add('tabs--active');

    tabsItem.forEach(function(element){ element.classList.remove('paintings__grid--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('paintings__grid--active');
  });
});


document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})