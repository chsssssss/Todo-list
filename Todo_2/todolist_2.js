let todo = [];

let add = document.querySelector('#add');
let manage = document.querySelector('ul');
let del = document.querySelector('#deleteAll');
let print = document.querySelector('#add');

//add.addEventListener('button', addTodo);
manage.addEventListener('click', todoManage);
del.addEventListener('click', deleteAll);
print.addEventListener('button', printTodo);


function addTodo(e) {
    e.preventDefault();
    let newTodo = document.getElementById('input');
    printTodo(newTodo.value);
    newTodo.value = "";
}

function printTodo(e) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `<input type="checkbox" id="checkbox"><input type="text" placeholder="새로운 할 일" id="input"><button type="submit" id="delete">X</button>`;
}

function todoManage(e) {
    let isCheck = document.getElementById('checkbox').checked;
    if(e.target.id == 'delete') {
        deleteTodo(e);
    }

    else if(e.target.id=='checkbox') {
        if(isCheck==true){
            document.getElementById('label').style.textDecoration="line-through";
            document.getElementById('label').style.color="grey";
        }
        else {
            document.getElementById('label').style.textDecoration="none";
            document.getElementById('label').style.color="black";
        }
    }
    else{
        alert('외');
    }
}

function deleteTodo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    //let del = e.target.parentElement;
    //del.remove();
}

// 전체삭제
function deleteAll(e) {
    document.querySelector('ul').innerHTML = '';
}
