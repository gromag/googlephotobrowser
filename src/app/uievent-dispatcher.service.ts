import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIEventDispatcherService {

  public statuses = {LOADING : 1, READY : 0 };


  nextPageTokenChanged: EventEmitter<any> = new EventEmitter();
  pageStateChanged: EventEmitter<any> = new EventEmitter();

  pageLoading(){
    this.pageStateChanged.emit(this.statuses.LOADING);
  }

  pageReady(){
    this.pageStateChanged.emit(this.statuses.READY);
  }

  constructor() { }
}
