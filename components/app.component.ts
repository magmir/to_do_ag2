/**
 * Created by magda on 25.04.16.
 */
import {Component, OnInit} from "angular2/core";
import {Todo} from "./todo";
import {TodoService} from "../services/todo.service";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AllComponent} from "./all.component";
import {CompletedComponent} from "./completed.component";
import {NgClass} from 'angular2/common';

@Component({
    selector: "to-do",
    templateUrl: "/components/todo.html",
    directives: [ROUTER_DIRECTIVES, NgClass],
    providers: [ROUTER_PROVIDERS, TodoService]
})


@RouteConfig([
    {
        path: '/all',
        name: 'All',
        component: AllComponent
    },

    {
        path: '/completed',
        name: 'Completed',
        component: CompletedComponent
    }
])

export class AppComponent implements OnInit {
    todos: Todo[];
    newTodo: string;
    constructor(private _todoService: TodoService) {
        
    };
    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }
    ngOnInit() {
        console.log('app.component');
        this.getTodos();
    }
    addNew() {
        this.todos.push({
            task: this.newTodo,
            done: false
        });
        this.newTodo = '';
        console.log("app",this.todos)
    }
}


