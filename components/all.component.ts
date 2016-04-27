/**
 * Created by magda on 26.04.16.
 */
import {Component, OnInit} from "angular2/core";
import {AppComponent} from "./app.component";
import {Todo} from "./todo";
import {TodoService} from "../services/todo.service";


@Component({
    selector: "all",
    template: `
            <div class="row row col-md-4 col-md-offset-4">
                <ul>
                    <li *ngFor='#todoTask of todos'>
                        <label><input type="checkbox" [(ngModel)]="todoTask.done"/></label>
                        <div [ngClass]="{'done' : todoTask.done}">
                            <p>{{todoTask.task}}</p>
                        </div>
                    </li>
                </ul>
            </div>
             <div class="row row col-md-4 col-md-offset-4">
                <button class="btn-danger" type="button" (click)="clear()">Clear Completed</button>
                <button class="btn-danger" type="button" (click)="try()">try</button>
            </div>
            `
})

export class AllComponent implements OnInit {
    todos: Todo[];

    constructor (private _todoService: TodoService){};
    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos)
    };
    ngOnInit() {
            this.getTodos();
    };

    clear() {
        var oldList;
        oldList = this.todos;
        this.todos = [];
        for (var i=0; i<oldList.length; i++) {
            if (!oldList[i].done) {
                this.todos.push(oldList[i]);
            }
        }
        this.todos;
    };

    try() {
      console.log('try', this.todos);
    }




}