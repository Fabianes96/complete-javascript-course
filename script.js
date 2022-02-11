'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener("click",()=>{
  // const s1coods = section1.getBoundingClientRect();
  //Scrolling
  
  //Old way
  // window.scrollTo(
  //   s1coods.left + window.pageXOffset,
  //   s1coods.top + window.pageYOffset
  // )

  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  //Modern way

  section1.scrollIntoView({
    behavior:"smooth"
  })
})

//Page Navigation

// document.querySelectorAll('.nav__link').forEach((el)=>{
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id  = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })
//Event delegation
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  //Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id  = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})