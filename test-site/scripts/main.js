let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nahua.png') {
      myImage.setAttribute('src', 'images/hua.jpg');
    } else {
      myImage.setAttribute('src', 'images/nahua.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '' + myName;
    }
  }
  
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to 南华！' + storedName;
  }

myButton.onclick = function() {
    setUserName();
 }
 
  