/**
 * Created by magda on 26.04.16.
 */
import {Injectable} from 'angular2/core';
import {TODOS} from "./mock-todos";


@Injectable()
export class TodoService {
    getTodos() {
        return Promise.resolve(TODOS);
    }
}