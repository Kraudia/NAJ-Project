import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todoList.service';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: ':categoryId', component: TodoListComponent },
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ TodoListComponent, TodoComponent ],
    exports: [ TodoListComponent ],
    providers: [ TodoService ]
})
export class TodoModule {

}
