import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  messageSubject: Subject<boolean> = new Subject<boolean>();

  message: String = new String('');
  message2: string = '';

  messageSubscription!: Subscription;

  constructor(
    private _service1: Service1Service
  ) { }

  ngOnInit(): void {
    this._service1.messageServiceParent = this;

    this.messageSubscription = this._service1.messageForEmit2$.subscribe(texto => {
      this.message2 = texto;
    });
  };

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  };

  showMessage(): void { // Message for Child
    this.message = new String('PARENT USING INPUT PROPERTY');
  };

  setMessageOfChild(message: string): void { // Set message of child
    this.message2 = message;
  };

  useServiceParent(): void {  // Service
    this._service1.messageServiceChild.message = new String('PARENT USING SERVICE');
  };

  showMessageInChildObservable() { // Observable
    this.messageSubject.next(false);
    this._service1.messageForEmit$.emit('PARENT USING SUBJECT')
  };
};
