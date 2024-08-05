type toDoitem={
    description: string;
    done: boolean;
    id: number;
}

let starterId:number = 0;
let toDos: toDoitem[] = [];

function addToDO(toDO:toDoitem):void{
    toDos.push(toDO);
    starterId += 1;
}

function remove(task:number):boolean{
    let found = 0;

    for (let i:number = 0; i<toDos.length;i++){
        if(toDos[i].id == task){
            found == 1;
            break;
        }
    }
    if (found){
        toDos = toDos.filter((todo)=> todo.id != task);
        return true;
    }
    return false;
}
function display():void{
    console.log("----- To-Do List -----");
    if(toDos.length == 0){
        console.log("You dont have any task!");
        return
    }

    console.log("No        Description      ID      Done");
    for (let i = 0; i<toDos.length;i++){
        console.log(`${i+1}     ${toDos[i].description}    ${toDos[i].id}    ${toDos[i].done}`);
    }
}

function main(): void {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question(
      "What would you like to do? (add, remove, display, exit): ",
      (choice: string) => {
        switch (choice.toLowerCase()) {
          case "add":
            let goingToBeAdded: toDoitem;
            readline.question("Enter to-do text: ", (text: string) => {
              goingToBeAdded.description = text;
              goingToBeAdded.done = false;
              goingToBeAdded.id=starterId;
              main();
            });
            break;
  
          case "remove":
            readline.question(
              "Enter the ID of the item to remove: ",
              (idStr: string) => {
                const id = parseInt(idStr, 10);
                let removed = remove(id);
                if (removed)console.log("Successfully removed!");
                else console.log("Couldnt find task with the given id!");
                main();
              }
            );
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
            main(); 
        }
      }
    );}
    main();