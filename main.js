let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "C:/Users/hunin/Desktop/webprojects/test-site/images/firefox.png") {
    myImage.setAttribute("src", "C:/Users/hunin/Desktop/webprojects/test-site/images/chrome.png");
  } else {
    myImage.setAttribute("src", "C:/Users/hunin/Desktop/webprojects/test-site/images/firefox.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}
myButton.onclick = function () {
  setUserName();
};