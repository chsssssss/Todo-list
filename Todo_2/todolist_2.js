let todo = [];

//let add = document.querySelector('#add');
let manage = document.querySelector('ul');
let del = document.querySelector('#deleteAll');
let add = document.querySelector('#add');
//let append = document.querySelector('#ok');
let label = document.querySelector('ul');
label.addEventListener('click',toLabel);

//add.addEventListener('button', addTodo);
manage.addEventListener('click', todoManage);
del.addEventListener('click', deleteAll);
add.addEventListener('click', printTodo);
//append.addEventListener('click', addTodo);

function setTodo(newTodo) {
    todo = newTodo;
}

/*
function addTodo(e) {
    e.preventDefault();
    let newTodo = document.getElementById('input');
    printTod(newTodo.value);
    document.querySelector("li").innerHTML = `<input type="checkbox" id="checkbox"><label id='label'>${newTodo}</label><button type="submit" id="delete">X</button>`;
    newTodo.value = "";
}*/

function printTodo(e) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `<input type="checkbox" id="checkbox"><input type="text" placeholder="새로운 할 일" id="input"><button type="submit" id="ok">ok</button>`;

}

function toLabel(e) {
    if(e.target.id=='ok'){
        let li = e.target.closest('li');
        let todoInput = document.getElementById('input').value;
        li.innerHTML = `<input type="checkbox" id="checkbox"><label id='label'>${todoInput}</label><button type="submit" id="delete">X</button>`;
    }

}

// 삭제 또는 체크
function todoManage(e) {
    let isCheck = e.target.checked;
    if(e.target.id == 'delete') {
        deleteTodo(e);
    }
    else if(e.target.id=='checkbox') {
        if(isCheck==true){
            e.target.closest('li').style.textDecoration="line-through";
            e.target.closest('li').style.color="grey";
        }
        else {
            e.target.closest('li').style.textDecoration="none";
            e.target.closest('li').style.color="black";
        }
    }
    else{
        //alert('외');
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
