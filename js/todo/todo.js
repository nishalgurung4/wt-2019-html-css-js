var todos = window.localStorage.getItem("todos");
var todoItems = todos != null ? JSON.parse(todos) : [];

renderItems();
document.getElementById("item").addEventListener("keyup", function(e) {
	if (e.keyCode != 13) {
		return false;
	}
	var todo = {};
	todo.name = document.getElementById("item").value;
	todo.isComplete = false;
	todoItems.push(todo);
	document.getElementById("item").value = "";
	saveTodoItems();
	renderItems();
});


function renderItems()
{
	document.getElementById("items").innerHTML = "";
		todoItems.forEach(function (item) {
			console.log(item);
			var checked = item.isComplete ? "checked" : "";

		document.getElementById("items").innerHTML += `<li>
		<input type="checkbox" ${checked} onClick="markAsComplete('${item.name}')"  class="is-complete"/>
		 ${item.name} </li>`
			});
}

function markAsComplete(name)
{
	todoItems.forEach(function (item) {
			if (item.name == name) {
				item.isComplete = ! item.isComplete;
				return true;
			}
	});

	saveTodoItems();
}

function saveTodoItems() 
{
	window.localStorage.setItem("todos", JSON.stringify(todoItems));
}