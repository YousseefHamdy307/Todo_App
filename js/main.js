// user clicked on the add button
document.getElementById('add').addEventListener('click',function() {
    var value = document.getElementById('item').value;
    if (value) addItemTodo(value);
    document.getElementById('item').value = '';
    document.getElementById('item').focus();
});

function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);   
}

function completeItem(){
     document.querySelector('li').style.backgroundColor = '#f40'
     document.querySelector('li').style.opacity = '0.7';
}

// Add New Items to Todo list
function addItemTodo(text) {
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerHTML = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');

    remove.classList.add('remove');
    remove.innerHTML = 'delete';
    
    remove.addEventListener('click',removeItem);
    
    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = 'done';
    
    complete.addEventListener('click',completeItem); 
    
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]); 
    
}

// Make Enter Key "add" the Task

var input = document.getElementById("item");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("add").click();
        }
    });