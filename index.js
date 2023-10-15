const root = document.querySelector('#root');

const header = document.createElement('h1');
const form = document.createElement('form');
const taskNameInput = document.createElement('input');
const taskDetailInput = document.createElement('textarea');
const resetButton = document.createElement('button');
const submitButton = document.createElement('button');
const errorMessage = document.createElement('p');
const labelTaskName = document.createElement('label');
const labelTaskDetail = document.createElement('label');
const buttonContainer = document.createElement('div')

const unorderedList = document.createElement('ul');

labelTaskName.textContent = 'Task Name';
labelTaskDetail.textContent = 'Task Details';
submitButton.textContent = 'Submit';
resetButton.textContent = 'Reset';
header.textContent = 'TODO LIST';
errorMessage.textContent = 'this field is required';

errorMessage.classList.add('error-message');
submitButton.classList.add('submit-button');
resetButton.classList.add('reset-button');
buttonContainer.classList.add('button-container');

root.append(header);
root.append(form);
form.append(labelTaskName);
form.append(taskNameInput);
form.append(labelTaskDetail);
form.append(taskDetailInput);
form.append(buttonContainer);
buttonContainer.append(submitButton);
buttonContainer.append(resetButton);
submitButton.setAttribute('type', 'button');
resetButton.setAttribute('type', 'button');
root.append(unorderedList);
console.log(root);

submitButton.addEventListener('click', submitTask);
resetButton.addEventListener('click', resetField);

function resetField() {
    errorMessage.remove();
    taskNameInput.value = '';
}

const taskList = [];

function submitTask() {
  if (errorMessage) {
    errorMessage.remove();
  }

  if (taskNameInput.value) {
    taskList.push(taskNameInput.value);
    addList();
    resetField();
  } else {
    form.append(errorMessage);
  }
}

function addList() {
  const listItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.textContent = taskList[taskList.length - 1];
  unorderedList.appendChild(listItem);
  unorderedList.appendChild(deleteButton);
}
