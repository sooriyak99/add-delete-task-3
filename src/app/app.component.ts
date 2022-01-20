import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public items = [];
  
    
    public newTask;
  
  
  
    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.items.push(this.newTask);
            this.newTask = '';
        }
    }
  
    
    public deleteTask(index) {
        this.items.splice(index, 1);
    }
}

