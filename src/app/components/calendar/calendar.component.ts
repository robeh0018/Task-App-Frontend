import {Component} from '@angular/core';

/** FullCalendar imports */
import {FullCalendarModule} from "@fullcalendar/angular";
import {CalendarOptions, DateSelectArg, EventClickArg} from '@fullcalendar/core';
// Plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, {EventDragStopArg} from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap5';

/** Core imports. */
import {CalendarEventsService} from "../../core";

/** ---------------------------------------------------------------------------------*/

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullCalendarModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      bootstrapPlugin
    ],

    /** Configuration */
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    // initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

    /** Styles. */
    themeSystem: 'bootstrap5',
    initialView: 'dayGridMonth',
    eventClassNames: ['bg-primary', 'text-dark'],

    /** Events */
    // eventsSet: this.handleEvents(),
    events: this.calendarEventsService.getEvents(),
    // Callbacks for the events.
    eventDragStop: (dragStopInfo: EventDragStopArg) => this.calendarEventsService.handleDragStop(dragStopInfo),
    select: (selectInfo: DateSelectArg) => this.calendarEventsService.handleDateSelect(selectInfo),
    eventClick: (clickInfo: EventClickArg) => this.calendarEventsService.handleEventClick(clickInfo),

    // // Just to test right now.
    // eventDrop: function (info) {
    //   console.log('eventDrop');
    // },
    // eventAdd: function (info) {
    //   console.log('eventAdd');
    // },
  }

  /** --------------------------------------------------------------------------------------*/

  constructor(
    private calendarEventsService: CalendarEventsService) {
  }
}
