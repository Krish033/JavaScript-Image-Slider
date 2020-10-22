// select DOM 
const slider = document.querySelectorAll('.slide');
const prev = document.querySelectorAll('#prev');
const next = document.querySelectorAll('#next');


// EVENTS 
document.addEventListener('click', imgSlider)


// FUNCTIONS 
function imgSlider(e) {

  // Getting Current class from DOM
  const current = document.querySelector('.current');

  // Checking for the clicked events target
  if (e.target.id === 'next') {
    
    // checking if the slider has a nextElementSibling
    if (current.nextElementSibling) {

      // if true add current class to it
      current.classList.remove("current");
      current.nextElementSibling.classList.add('current');
    } else {

      // else add current class to the first element
      current.classList.remove("current")
      slider[0].classList.add("current");
    }
  }

  // Checking for the clicked events target
  if (e.target.id === 'prev') {

    // checking if the slider has a previoisElementSibling
    if (current.previousElementSibling) {

      // if true add current class to it
      current.classList.remove("current")
      current.previousElementSibling.classList.add('current');
    } else {

      // else add current class to the first element
      current.classList.remove("current")
      slider[slider.length - 1].classList.add("current");
    }
  }
};