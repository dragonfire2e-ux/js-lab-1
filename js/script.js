// Event 1 DOM: change the content
function changeText() {
  document.getElementById("message").innerHTML = "The text has been changed";
}

// Event 2 DOM: change the styling
function changeStyle() {
  document.getElementById("box").style.backgroundColor = "lightblue";
  document.getElementById("box").style.width = "500px";
  document.getElementById("box").style.height = "200px";
  document.getElementById("message").style.fontSize = "30px";
  document.getElementById("message").style.color = "darkblue";
}

// Event 3 BOM: open a pop up window
function openPopup() {
  window.open("popup.html", "", "width=300, height=200");
}
