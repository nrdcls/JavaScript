class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      if (task) {
        this.tasks.push(task);
        console.log(`Tarefa adicionada: "${task}"`);
      } else {
        console.log('Por favor adicione uma tarefa');
      }
    }
  
    removeTask(index) {
      if (this.tasks.length === 0) {
        console.log('Nenhuma tarefa na lista.');
      } else if (index < 0 || index >= this.tasks.length) {
        console.log('Índice inválido.');
      } else {
        const removedTask = this.tasks.splice(index, 1);
        console.log(`Tarefa removida: "${removedTask}"`);
      }
    }
  
    viewTasks() {
      if (this.tasks.length === 0) {
        console.log('Nenhuma tarefa na lista.');
      } else {
        console.log('Lista de tarefas:');
        this.tasks.forEach((task, index) => {
          console.log(`${index}: ${task}`);
        });
      }
    }
  }
  
 
  const minhaLista = new ToDoList();
  minhaLista.addTask('Estudar JavaScript');
  minhaLista.addTask('Ir ao supermercado');
  minhaLista.viewTasks();
  minhaLista.removeTask(1);
  minhaLista.viewTasks();
  minhaLista.removeTask(10); 
  
