import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIEventDispatcherService {


  public statuses = {LOADING : 1, READY : 0, SIGNEDOUT : 2 };


  nextPageTokenChanged: EventEmitter<any> = new EventEmitter();
  pageStateChanged: EventEmitter<any> = new EventEmitter();

  pageLoading(){
    this.pageStateChanged.emit(this.statuses.LOADING);
  }

  pageReady(){
    this.pageStateChanged.emit(this.statuses.READY);
  }

  logout() {
    this.pageStateChanged.emit(this.statuses.SIGNEDOUT);
  }

  constructor() { }
}
