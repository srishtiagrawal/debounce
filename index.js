// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// debounce implementation

const debounce = (fun, delay) => {
  let timeoutId;
  return function (...agrs) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fun(...agrs);
    }, delay);
  };
};

//Button click before debounce implementation

/* 
  document.getElementById('clickme').addEventListener(('click'), () => {
   console.log("button clicked!!!")
 })
*/

// Button click after debounce implementation

document.getElementById('clickme').addEventListener(
  'click',
  debounce(() => {
    console.log('clicked from debounce fun!!');
  }, 2000)
);

/*
  Input before debounce implementation

document.getElementById('searchInput').addEventListener(('input'), () => {
  console.log('inpout')
})
*/

// Input after debounce implementation

document.getElementById('searchInput').addEventListener(
  'input',
  debounce(() => {
    console.log('Input is clicked..');
  }, 2000)
);
