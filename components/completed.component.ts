/**
 * Created by magda on 26.04.16.
 */
import {Component, OnInit} from "angular2/core";
import {AppComponent} from "./app.component";
import {Todo} from "./todo";
import {TodoService} from "../services/todo.service";

@Component({
    selector: "completed",
    template: `
           <div class="row row col-md-4 col-md-offset-4">
                <ul>
                    <li *ngFor='#doneTask of todos'>
                        <div *ngIf="doneTask.done">
                            <p>{{doneTask.task}}</p>
                        </div>
                    </li>
                </ul>
            </div>
             <div class="row row col-md-4 col-md-offset-4">
                <button class="btn-danger" type="button" (click)="clear()">Clear Completed</button>
            </div>
            `
})

export class CompletedComponent implements OnInit {
    todos: Todo[];
    oldList: Todo[];
    constructor (private _todoService: TodoService){};
    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos)
    };
    ngOnInit() {
        console.log('completed.component');
        this.getTodos();
    };

    clear() {
        this.oldList = this.todos;
        this.todos = [];
        for (var i=0; i<this.oldList.length; i++) {
            if (!this.oldList[i].done) {
                this.todos.push(this.oldList[i]);
            }
        }
    }
    
}
