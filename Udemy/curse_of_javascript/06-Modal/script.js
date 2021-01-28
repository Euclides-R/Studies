'use strict';
<<<<<<< HEAD
// PROJECT II Modal windows
=======
>>>>>>> branch-PC

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

<<<<<<< HEAD
// console.log(btnsOpenModal);

=======
>>>>>>> branch-PC
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

<<<<<<< HEAD
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
=======
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

>>>>>>> branch-PC
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
<<<<<<< HEAD
=======
  // console.log(e.key);

>>>>>>> branch-PC
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
