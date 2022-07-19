// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

console.log(articlesDiv.children[0]);
console.log(headerDiv);
// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";
headerDiv.children[0].style.color = "white";

function changeFont() {
  articlesDiv.children[0].style.fontSize = "50px";
}

function changeColor() {
  headerDiv.children[0].style.color = "#fff";
}
