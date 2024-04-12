import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataKey: string = 'userData';

  constructor() { }

  getUserData(){
    const userDataString = localStorage.getItem(this.userDataKey);
    if(userDataString){
      return JSON.parse(userDataString);
    }else
    return null;
  }

  setUserData(data: any){
    localStorage.setItem(this.userDataKey, JSON.stringify(data));
  }
}
