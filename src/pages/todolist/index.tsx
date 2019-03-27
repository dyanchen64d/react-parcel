import React,{Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject((stores:any)=>({
  todolistStore:stores.todolistStore
}))
@observer
class TodoListView extends Component<any,any> {

    constructor(props) {
      super(props);
    }

    addTodo = ()=>{
      const currStore = this.props.todolistStore
      currStore.addTodo((new Date()).toString())
    }

    render() {
        const currStore = this.props.todolistStore
        return <div>
            <ul>
                {currStore.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {currStore.unfinishedTodoCount}
            <button onClick={this.addTodo}>addTodo</button>
        </div>
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onChange={() => todo.finished = !todo.finished}
        /> {todo.title}
    </li>
)

export default TodoListView;