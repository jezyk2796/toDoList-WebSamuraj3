const form = document.querySelector('form');
const createInput = document.querySelector('.create');
const taskNumber = document.querySelector('h1 span');
const list = document.querySelector('ul');
const lis = document.getElementsByClassName('newTask');

const addTask = (e) => {
    e.preventDefault();

    const title = createInput.value;
    if (title === "") return;

    const newLi = document.createElement('li');
    newLi.classList.add('newTask');
    newLi.innerHTML = `${title} <button>Usuń</button>`;
    list.appendChild(newLi);

    createInput.value = "";
    taskNumber.textContent = lis.length;

};

form.addEventListener('submit', addTask);