function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', function(event){
      // this.parentElement represents the button's <li> parent
      toDoList.removeChild(this.parentElement);
    })

    deleteBtn.className="mdl-button mdl-js-button mdl-button--primary"
    checkbox.className="mdl-checkbox__input"
    newLi.className="newLi"

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // name delete button
    deleteBtn.textContent = "Delete"

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button
    newLi.appendChild(deleteBtn);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value='';

  });
}

window.onload = function() {
  onReady();
};
