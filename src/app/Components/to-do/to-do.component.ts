import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title:string = " To Do List Application";

  tasks : string[] = [];
  newTask : string="";
  isAvalible : boolean = false;

  addTask()
  {
    if(this.newTask.trim() !=="")
    {
      this.tasks.push(this.newTask);
      this.newTask="";
      this.isAvalible = true;
    }
    console.log(this.tasks);
  }
  // EditTask(index : number)
  // {
  //   let updateTask = prompt("Edit Task",this.tasks[index]);
  //   if(updateTask !== null)
  //   {
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }\
  EditTask(index:number, newtaskEdit:string) : string | void 
  {
   
    if(newtaskEdit.trim() !== "")
    {
      this.tasks[index] = newtaskEdit;
    }
    else
    {
      newtaskEdit = this.tasks[index];
      return this.newTask = newtaskEdit;
    }
    this.newTask ="";
  }
  RemoveTask(index : number)
  {
    this.tasks.splice(index,1);
    this.isAvalible = this.tasks.length > 0 ;
  }
}
