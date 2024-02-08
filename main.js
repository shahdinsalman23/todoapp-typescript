import inquirer from 'inquirer';
// Todos Array
// Todo Function
//  Operations
let todos = [];
async function createTodo(arr) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an option",
            name: "Select",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.Select == "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add item"
            });
            arr.push(addtodo.todo);
            console.log(todos);
        }
        if (ans.Select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select item for Update",
                choices: todos.map((item) => item),
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add item"
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addtodo.todo];
            console.log(todos);
        }
        if (ans.Select == "view") {
            console.log(todos);
        }
        if (ans.Select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select item for Update",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
