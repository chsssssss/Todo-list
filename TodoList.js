document.querySelector('form').addEventListener('submit', addTodo);
document.querySelector('ul').addEventListener('click', todoManage);
document.querySelector('#deleteAll').addEventListener('click', deleteAll);
document.querySelector('#checkbox').addEventListener('change', leftTodo);

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
    li.innerHTML = `<input type="checkbox" id="checkbox"><label id='label'>${newTodo}</label><button type="submit" id="delete">X</button>`;
}

// 삭제 또는 체크
function todoManage(e) {
    let isCheck = document.getElementById('checkbox').checked;
    if(e.target.id == 'delete') {
        deleteTodo(e);
    }
    else if(e.target.id == 'label'){
        todoDetail(e);
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


// 삭제
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

// 남은 할일
function leftTodo(e) {
    let li_Count = getElementByTagName("ul").childElementCount;
    let left = document.getElementById('#checkbox');
    let leftTodo = left.checked;
    document.getElementById('#left').innerHTML = '<span id="left">${("input:checkbox[name=checkbox]:checked").length}</span>'; //체크박스 선택된 개수
}
