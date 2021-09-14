import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor(private httpService: HttpClient) { }

  public jsondata ():Observable<any> {
    return this.httpService.get('./assets/ToDoTask.json');
  }
}
