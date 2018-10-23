// Getting Elements
var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
// Setting location
// Location also in CSS
var leftBox = box1;
var centerBox = box2;
var rightBox = box3;
// Position variables
var leftPosition = '0px';
var centerPosition = '220px';
var rightPosition = '440px';
var topOffsetPosition = '0px';
var topPosition = '50px';
var upperZindex = 900;
var lowerZindex = 0;
// Helper box for changing location
var helperBox; 
// Adding Event Listeners
box1.addEventListener('click', move)
box2.addEventListener('click', move)
box3.addEventListener('click', move)

// Moves box base off of leftOffset position
function move() {
  // If in left card position
  if(this.offsetLeft === 0){
    nonClickable();
    leftBox.classList.add('left-to-center');
    centerBox.classList.add('center-to-left');
    setTimeout(function(){
      centerBox.style.left = leftPosition;
      centerBox.style.top = topOffsetPosition;
      centerBox.style.zIndex = lowerZindex;
      leftBox.style.left = centerPosition;
      leftBox.style.top = topPosition;
      leftBox.style.zIndex = upperZindex;
      leftBox.classList.remove('left-to-center');
      centerBox.classList.remove('center-to-left');
      helperBox = leftBox;
      leftBox = centerBox;
      centerBox = helperBox;
      clickable();
    }, 1000);
  }

  // If Center Card
  if(this.offsetLeft === 220){
    console.log(this.offsetLeft);
  }

  // If in right card position
  if(this.offsetLeft === 440){
    nonClickable();
    rightBox.classList.add('right-to-center');
    centerBox.classList.add('center-to-right');
    setTimeout(function(){
      centerBox.style.left = rightPosition;
      centerBox.style.top = topOffsetPosition;
      centerBox.style.zIndex = lowerZindex;
      rightBox.style.left = centerPosition;
      rightBox.style.top = topPosition;
      rightBox.style.zIndex = upperZindex;
      rightBox.classList.remove('right-to-center');
      centerBox.classList.remove('center-to-right');
      helperBox = rightBox;
      rightBox = centerBox;
      centerBox = helperBox;
      clickable();
    }, 1000);
  }
};

// Removes no-click CSS class
function clickable() {
  leftBox.classList.remove('no-click');
  centerBox.classList.remove('no-click');
  rightBox.classList.remove('no-click');
}

// Adds no-click CSS class
function nonClickable() {
  leftBox.classList.add('no-click');
  centerBox.classList.add('no-click');
  rightBox.classList.add('no-click');
}

