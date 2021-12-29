var todoInp = document.getElementById('input');
var delul = document.getElementById('todoul')

function addtodo() {

  var todoValue = todoInp.value;

  var newLi = document.createElement('li')
  var text = document.createTextNode(todoValue)
  newLi.appendChild(text);
  

  var delDiv = document.createElement('div');
  newLi.appendChild(delDiv);

  var editTodo = document.createElement('button');
  var editTxt = document.createTextNode('Edit');
  editTodo.setAttribute('class', 'btn');
  editTodo.setAttribute('onclick', 'editTodo(this)');
  
  editTodo.appendChild(editTxt);
  delDiv.appendChild(editTodo);
  
  
  var delTodo = document.createElement('button');
  var delTxt = document.createTextNode('delete');
  delTodo.setAttribute('class', 'btn');
  delTodo.setAttribute('onclick', 'delTodo(this)')
  
  
  delTodo.appendChild(delTxt);
  delDiv.appendChild(delTodo);
  
  delul.appendChild(newLi);
}

function editTodo(element) {
  element.parentNode.parentNode.firstChild.nodeValue = prompt("Edit your To-Do,", "");
}

function delTodo(element) {
  element.parentNode.parentNode.remove();
}

function deleteAll() {
  delul.innerHTML = "";
}