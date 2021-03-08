'use strict';

//// Selectors //////

const taskInput = document.querySelector('.search-bar');
const tasks = document.querySelector('.lists');
const add = document.querySelector('.btn-add');
const clear = document.querySelector('.clear__btn');

//// Functions ////////

// add a task
const addNewTask = function (e) {
  e.preventDefault();

  // newTask DIV
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Create LI
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  newTask.classList.add('task-item');
  taskDiv.appendChild(newTask);

  // Completed button
  const done = document.createElement('button');
  done.innerHTML = '<i class="ri-check-line"></i>';
  done.classList.add('btn-done');
  taskDiv.appendChild(done);

  // delete button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = '<i class="ri-close-line"></i>';
  trashBtn.classList.add('btn-trash');
  taskDiv.appendChild(trashBtn);

  // Append to list
  tasks.appendChild(taskDiv);

  // clear input value
  taskInput.value = '';
};

// show clear list button
const showClearBtn = function (e) {
  e.preventDefault();
  clear.classList.remove('clear__btn--hidden');
};

// hide clear list button
const hideClearBtn = function (e) {
  e.preventDefault();
  clear.classList.add('clear__btn--hidden');
};

const deleteTask = function (e) {
  const item = e.target;
  // Detele task
  if (item.classList[0] === 'btn-trash') {
    const task = item.parentElement;
    task.remove();
  }

  // Check complete task
  if (item.classList[0] === 'btn-done') {
    const task = item.parentElement;
    task.classList.toggle('completed');
  }
};

const clearLists = function (e) {
  e.preventDefault();
  const clearAll = document.querySelector('.lists');
  while (clearAll.firstChild) {
    clearAll.removeChild(clearAll.firstChild);
  }
};

////// Event listeners /////
add.addEventListener('click', addNewTask);
add.addEventListener('click', showClearBtn);
tasks.addEventListener('click', deleteTask);
document.querySelector('.clear__btn').addEventListener('click', clearLists);
document.querySelector('.clear__btn').addEventListener('click', hideClearBtn);
