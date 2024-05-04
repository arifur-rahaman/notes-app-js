const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let image = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  image.src = "Images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(image); // append means to display
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    //you should write tagname"IMG" in capital letter
    e.target.parentElement.remove();
  }
});
