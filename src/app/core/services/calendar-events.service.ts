import {Injectable} from '@angular/core';

/** FullCalendar imports */
import {DateSelectArg, EventClickArg, EventInput} from "@fullcalendar/core";
import {EventDragStopArg} from "@fullcalendar/interaction";

/** NgbBootstrap imports */
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

/** Component imports */
import {TaskEditComponent} from "../../components";

/** --------------------------------------------------------------------------------------*/

@Injectable({
  providedIn: 'root'
})
export class CalendarEventsService {

  private currentEvents: EventInput[] = [
    {
      id: '1',
      title: 'All Day Event',
      allDay: true,
      start: new Date().toISOString(),
      end: new Date().toISOString()
    },
    {
      id: '2',
      title: '2 All Day Event',
      allDay: true,
      start: new Date().toISOString(),
      end: new Date().toISOString()
    },
    {
      id: '3',
      title: '3 All Day Event',
      allDay: true,
      start: new Date().toISOString(),
      end: new Date().toISOString()
    }
  ];

  constructor(private modalService: NgbModal) {
  }

  /** --------------------------------------------------------------------------------------*/

  getEvents(): EventInput[] {
    return this.currentEvents;
  }

  /** --------------------------------------------------------------------------------------*/

  handleDateSelect(selectInfo: DateSelectArg): void {
    // click on a date.
    console.log('handleDateSelect');
    this.onOpenTaskEditModal();
    // const calendarApi = selectInfo.view.calendar;
    //
    // calendarApi.unselect(); // clear date selection

    // if (title) { =
    //   console.lo   g(calendarApi.getDate());
    //   calendarApi.addEvent({
    //     id: new Date().getTime().toString(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: false,
    //     hasEnd: true
    //   });
    // }
  }

  /** --------------------------------------------------------------------------------------*/

  handleEventClick(clickInfo: EventClickArg) {
    // Click on an event.
    console.log('handleEventClick');
    this.onOpenTaskEditModal();
  }

  /** --------------------------------------------------------------------------------------*/

  handleDragStop(info: EventDragStopArg) {
    // Drag on an event.
    console.log('handleDragStop');
    this.onOpenTaskEditModal();
  }

  private onOpenTaskEditModal(): void {
    this.modalService.open(TaskEditComponent, {
      size: 'lg',
      centered: true,
    })
  }
}
