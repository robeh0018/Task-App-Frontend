import {Component} from '@angular/core';

/** NgbBootstrap imports */
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})

export class TaskEditComponent {

  constructor(public activeModal: NgbActiveModal) {
  }
}
