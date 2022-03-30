import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  flag:any;
  constructor() { }
  checking(value:any){
    return this.flag=value;
  }
}
