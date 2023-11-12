'use strict';
// So I'm pretty sure we're gonna be doing add/remove classes here like like targeting the .modal and adding the class .show-modal.
// Likely going to use 'this' because of the separate buttons
// classes being used: .hidden,  .show-modal (show buttons) , .close-modal (close button), .modal, .overlay

const modal = document.querySelector('.modal'); // selection stored in variable
const overlay = document.querySelector('.overlay'); // Overlay to darken background
const btnCloseModal = document.querySelector('.close-modal'); // Close button on modal

const btnShowModal = document.querySelectorAll('.show-modal'); // Button target, use 'this' to stop all of them going at once

// Looping over the button to allow them to be selected
// for (let i = 0; i < btnShowModal.length; i++) {
//   btnShowModal[i].addEventListener('click', function () {
//     console.log(this);
//     modal.classList.remove('hidden'); // Remember, do NOT add the dot or # here.
//     overlay.classList.remove('hidden');
//   });
// }

//Close modal button
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Allowing clicking outside of the modal to close the modal
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Combining the close button and overlay close:
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

//Open a modal function:
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Refactored for loop
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    openModal();
  });
}
