import { observable,computed,action } from "mobx"

class TodoList {

    rootStore:any;

    constructor(rootStore){
      this.rootStore = rootStore
    }

    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action addTodo (name) {
      this.todos.push(new Todo(name))
    }

}

class Todo {
    constructor(title) {
      this.title=title
    }

    id = Math.random();
    @observable title = this.title;
    @observable finished = false;
}

export default TodoList;