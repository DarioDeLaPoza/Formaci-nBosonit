import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() message = new String('');
  @Input() messageSubject!: Observable<boolean>;

  @Output() messageOutput: EventEmitter<string> = new EventEmitter();

  messageSubscription!: Subscription;

  ngOnInit() {
    this._service1.messageServiceChild = this;

    this.messageSubscription = this._service1.messageForEmit$.subscribe(texto => {
      this.message = texto;
    });
  };

  constructor(
    private _service1: Service1Service
  ) { }

  emitMessage() { //Output
    this.messageOutput.emit('CHILD USING OUTPUT EVENT');
  };

  useServiceChild() { //Service
    this._service1.messageServiceParent.message2 = 'CHILD USING SERVICE';
  };

  showMessageInParentObservable() { //Observable
    this._service1.messageForEmit2$.emit('CHILD USING SUBJECT')
  };

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  };
};
