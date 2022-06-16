const todo_button = document.querySelector("#todo-button");
const todo_input = document.querySelector("#todo-input");
const todo_ul = document.querySelector("#todo-ul");
const sil = document.querySelector(".fa-trash");
// const check = document.querySelector(".fa-check".value);


let küme = [];

todo_button.onclick = () => {
    küme.push(todo_input.value);
    console.log(küme);
    todo_ul.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${todo_input.value}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;
    todo_input.value = ""
}

todo_input.onkeydown = (tus) => {
    if (tus.keyCode === 13) {
        document.querySelector("#todo-button").click();
    }

}


todo_ul.onclick = (f) => {
    if (f.target.classList.contains("fa-trash")) {
      f.target.parentElement.remove();
    } else if (f.target.classList.contains("fa-check")) {
      if (f.target.parentElement.className!=("checked")) {
        f.target.parentElement.className = "checked";
      } else {
        f.target.parentElement.className=""
      }           
    }
  };








