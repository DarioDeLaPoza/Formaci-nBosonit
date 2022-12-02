import { EventEmitter, Injectable } from '@angular/core';
import { ChildComponent } from '../components/child/child.component';
import { ParentComponent } from '../components/parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  // Observables
  messageForEmit$ = new EventEmitter<string>();
  messageForEmit2$ = new EventEmitter<string>();

  constructor() { }

  // Para compartir entre componentes.
  public messageServiceParent!: ParentComponent;
  public messageServiceChild!: ChildComponent;
};
