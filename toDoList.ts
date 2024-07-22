//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
import inquirer from "inquirer";

let todos=[]

let condition=true

while(condition){
let addTask=await inquirer.prompt([
    {
      name: "ToDoList",
      type: "input",
      message: "What item you want ro add in to do list: "
    },

    {
      name:"addMore",
      type:'confirm',
      message:"Do you want to add more?",
      default:"false"

    }
 ] );
  
  todos.push(addTask.ToDoList)
  condition=addTask.addMore
 console.log(todos)
}