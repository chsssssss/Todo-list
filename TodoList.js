document.querySelector('form').addEventListener('submit', addTodo);
// 추가
function addTodo(e) {
    e.preventDefault();
    let newTodo = document.getElementById('input');
    printTodo(newTodo.value);
    newTodo.value = "";
}

function printTodo(newTodo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `<input type="checkbox" id="checkbox"><label>${newTodo}</label><a id="delete">X</a>`;
}



// 삭제
//function deleteTodo()


// 전체삭제
//function deleteAll() 