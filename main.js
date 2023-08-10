const elInputName = document.querySelector(".input-name");
const elInputDate = document.querySelector(".input-date");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

let todos = [
  {
    id: 0,
    title: "yugurish",
    created: "02.08.2023",
    isDone: true,
  },
  {
    id: 1,
    title: "kitob o'qish",
    created: "05.08.2023",
    isDone: false,
  },
  {
    id: 2,
    title: "kitob o'qish",
    created: "05.08.2023",
    isDone: false,
  },
];

function renderTodos(array, parent) {
  parent.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "card p-3 mt-3";
    newCard.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
        <div class="card-title  ${
          array[i].isDone ? "text-decoration-line-through" : ""
        }">${array[i].id + 1} ${array[i].title}</div>
        <p> ${array[i].created}</p>
        <img data-id=${
          array[i].id
        } id="delete-icon" width="30" src="./delete-button-svgrepo-com.svg" alt="" />
        
        
          
        </div>
        `;
    parent.appendChild(newCard);
  }
}

elCards.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-icon") {
    const id = Number(evt.target.dataset.id);
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    }

    todos = newTodos;
    renderTodos(todos, elCards);
  }
});
renderTodos(todos, elCards);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elInputName.value !== "") {
    const newTodo = {
      id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
      title: elInputName.value,
      created: elInputDate.value,
      isDone: false,
    };
    todos.push(newTodo);
    renderTodos(todos, elCards);

    elForm.reset();
  } else {
    alert("Error");
  }
});
