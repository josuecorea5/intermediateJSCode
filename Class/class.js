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
const TaskList = class {
  constructor() {
    this.tasks = [
      {title: 'Learn Firebase', completed: false},
			{title: 'Learn CSS', completed: true},
			{title: 'Learn HTML', completed: false},
    ]
  }
  //getters -> obtienen valores, no aceptan parametros
  //cuando la llamamos no ocupamos parentesis
  get uncompleted() {
    return [...this.tasks].filter(task => !task.completed);
  }

  get completed() {
    return [...this.tasks].filter(task => task.completed);
  }

  //Setters -> no se invocan pero reciben parametros
  set addTask(task) {
    this.tasks.push(task)
  }

  //Methods
  search(search) {
    return this.tasks.find(task => task.title.includes(search));
  }

  removeTask(index) {
    this.tasks.splice(index,1);
  }

  //static methods -> solo se pueden llamar desde la
  //clase no se heredan, no se necesita instanciar la
  // clase para utilizarlo
  static normalizeTask(title) {
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.substring(1)
  }


}

const tareas = new TaskList();

const tarea2 = new Task("Learn English");
tareas.addTask = {...tarea2};

console.log(tareas.uncompleted)
console.log(tareas.search("English"));

//sin necesidad de instanciar
console.log(TaskList.normalizeTask("  hola que tal  "));

//herencia o subclassing
class Reminder extends Task {
  constructor(title, date) {
    super(title);
    this.date = date;
  }

  get duration() {
    return `${this.title} finaliza el ${this.date}`
  }
}

const remiderTask = new Reminder("Learn React","30 de septimebre de 2021");
console.log(remiderTask.duration)