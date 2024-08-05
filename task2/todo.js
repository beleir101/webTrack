var starterId = 0;
var toDos = [];
function addToDO(toDO) {
    toDos.push(toDO);
    starterId += 1;
}
function remove(task) {
    var found = 0;
    for (var i = 0; i < toDos.length; i++) {
        if (toDos[i].id == task) {
            found == 1;
            break;
        }
    }
    if (found) {
        toDos = toDos.filter(function (todo) { return todo.id != task; });
        return true;
    }
    return false;
}
function display() {
    console.log("----- To-Do List -----");
    if (toDos.length == 0) {
        console.log("You dont have any task!");
        return;
    }
    console.log("No        Description      ID      Done");
    for (var i = 0; i < toDos.length; i++) {
        console.log("".concat(i + 1, "     ").concat(toDos[i].description, "    ").concat(toDos[i].id, "    ").concat(toDos[i].done));
    }
}
function main() {
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question("What would you like to do? (add, remove, display, exit): ", function (choice) {
        switch (choice.toLowerCase()) {
            case "add":
                var goingToBeAdded_1;
                readline.question("Enter to-do text: ", function (text) {
                    goingToBeAdded_1.description = text;
                    goingToBeAdded_1.done = false;
                    goingToBeAdded_1.id = starterId;
                    main();
                });
                break;
            case "remove":
                readline.question("Enter the ID of the item to remove: ", function (idStr) {
                    var id = parseInt(idStr, 10);
                    var removed = remove(id);
                    if (removed)
                        console.log("Successfully removed!");
                    else
                        console.log("Couldnt find task with the given id!");
                    main();
                });
                break;
            case "display":
                display();
                main();
                break;
            case "exit":
                console.log("Exiting...");
                readline.close();
                break;
            default:
                console.log("Invalid choice. Please choose from: add, remove, display, exit");
                main(); // Ask for another action
        }
    });
}
