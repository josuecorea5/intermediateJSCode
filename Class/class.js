//class declaration
class Task {
  //constructor
  constructor(title) {
    if(!title) throw new Error("We need a ¡title!");
    this.title = title;
    this.completed = false;
  }
}

//Create a instance of Task
const task = new Task("Learn JavaScript");
console.log(task);

//check instance
console.log(task instanceof Task)

//create class expressions