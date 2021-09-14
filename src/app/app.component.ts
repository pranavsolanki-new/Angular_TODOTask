import { Component, ViewChild } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
//  Id: number | undefined;
//  taskName: any;
//  Crdate: any;
//  status: any
//  action:any;

 addbuttonData=true;
 editbuttonData =false;
 submitted: boolean = false;
 @ViewChild('closebutton') closebutton:any;
 @ViewChild('valueEdit') valueEdit:any
 optionalgroup=[{
   Id:'',
   taskName:'',
   Crdate:'',
   status:'',
   action:''
 }]

 dropdownvalue =[{"name":"Active"},{"name":"Inactive"}]

  constructor(private _todoservices : ToDoService) { }

  ngOnInit() {
    this._todoservices.jsondata().subscribe((data)=>{
      this.details = data;
    });
  
  }
  modelopen(){
    this.editbuttonData=false;
   this.addbuttonData=true;
  }
  selectChangeHandler(event:any,row:any){
    debugger
    row.status =event.target.value
    console.log(event.target.value)
  }
  EditData(row:any)
  {
   debugger
   this.editbuttonData=true;
   this.addbuttonData=false;
   this.optionalgroup[0].Id= row.Id
   this.optionalgroup[0].taskName = row.taskName
   this.optionalgroup[0].status = row.status
   this.optionalgroup[0].action = row.action 
   this.optionalgroup[0].Crdate = row.Crdate
  }
  Popupmodel(i:any,group:any){
    debugger
    let  values ={'Id':group.Id,'taskName':group.taskName,'action':group.action,'status':group.status,'Crdate':group.Crdate}
    this.details.push(values)
    this. optionalgroup=[{
      Id:'',
      taskName:'',
      Crdate:'',
      status:'',
      action:''
    }]
    this.closebutton.nativeElement.click(); 
  }
  CloseButton()
  {
    this.optionalgroup=[{
      Id:'',
      taskName:'',
      Crdate:'',
      status:'',
      action:''
    }]
  }
  updatedata(row:any)
  {
  debugger;
    for(var i=0; i<this.details.length;i++){
  if(this.details[i]["Id"]==row.Id)
  {
    debugger;
    this.details[i]["Id"]=row.Id
    this.details[i]["taskName"]=row.taskName
    this.details[i]["Crdate"]=row.Crdate
    this.details[i]["status"]=row.status 
    this.details[i]["action"]=row.action 
    this.closebutton.nativeElement.click(); 
   // console.log(this.Name+this.Age+this.DOJ)
  }
}
}

Datadelete(Id: any)
{
debugger
for(let i = 0; i < this.details.length; i++){
  if (this.details[i]["Id"] === Id) {
      this.details.splice(i,1);
  }
}
}

}
